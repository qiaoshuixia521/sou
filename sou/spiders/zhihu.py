# -*- coding: utf-8 -*-
import base64
import hmac
import json
import re
import time
from _sha1 import sha1
from urllib import parse
import matplotlib.pyplot as plt
import execjs
from PIL import Image

import scrapy
from scrapy import FormRequest

from sou.items import ZhihuArticleTiem, ZhihuVideoTime, ZhihuQuestionItem


class ZhihuSpider(scrapy.Spider):

    name = 'zhihu'
    allowed_domains = ['www.zhihu.com']
    start_urls = ['http://www.zhihu.com/']

    login_url = "https://www.zhihu.com/api/v3/oauth/sign_in"
    captcha_url = "https://www.zhihu.com/api/v3/oauth/captcha?lang=en"

    session_token = ""
    custom_settings = {
        "ITEM_PIPELINES": {
            # "sou.pipelines.MongodbPipline": 544,
            "sou.pipelines.ElasticsearchPipline":545,
        }
    }
    def __init__(self):
        super(ZhihuSpider,self).__init__()

        self.headers = {
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'accept-language': 'zh-CN,zh;q=0.9',
            'cache-control': 'max-age=0',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'none',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36'}
        self.headers_login = {
            'accept-encoding': 'gzip, deflate, br',
            'content-type': 'application/x-www-form-urlencoded',
            'referer': 'https://www.zhihu.com/',
            'host': 'www.zhihu.com',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
            'x-xsrftoken': "",
            'x-zse-83': '3_2.0'}
        self.form_data = {'client_id': "c3cef7c66a1843f8b3a9e6a1e3160e20",
                          'grant_type': "password",
                          'lang': "en",
                          'password': "048109123",
                          'ref_source': "other_https://www.zhihu.com/signin?next=%2F",
                          'signature': "85ce9f18b9abb8ffa9c2421e01e61a3c35bfefdc",
                          'source': "com.zhihu.web",
                          'timestamp': '1592578267713',
                          'username': "+8618209237838",
                          'utm_source': '',
                          'captcha': "",
                          }
        self.time_str = str(int(time.time() * 1000))

    def parse(self,response):
        print(response.status)
        # print(response.text)
        question = ZhihuQuestionItem()
        question["question_title"] = response.xpath('//*[@class="QuestionHeader-title"]/text()').extract_first()
        question["answer"] = response.xpath('string(//*[@class="RichContent-inner"])').extract_first()
        question["content_type"] = response.meta.get("cont_type","")
        print(question["question_title"],question["answer"])
        yield question


    def content_url(self,response):
        if self.session_token in response.url:
            print(type(response.body))
            print(response.text) #response.text str
            print(response.body)

            print(response)
            print("=======================")

            content_top = json.loads(response.text)
            question_id = ''
            answer_id = ''
            for text in content_top["data"]:
                types = text["target"]["type"]
                if types == "answer":
                    try:
                        question_id = text["target"]["question"]["id"]
                        # https://api.zhihu.com/answers/589663139
                        answer_id = text["target"]["url"].replace("https://api.zhihu.com/answers/", "")
                    except:
                        pass
                    # https://www.zhihu.com/question/305792030/answer/589663139
                    answer_url = "https://www.zhihu.com/question/{question_id}/answer/{answer_id}".format(
                        question_id=str(question_id), answer_id=str(answer_id))
                    yield scrapy.Request(answer_url, meta={"cont_type":types},headers=self.headers)

                elif types == "article":
                    article = ZhihuArticleTiem()
                    print("本次爬取类型：%s"%types)
                    article["article_title"] = text["target"]["title"]
                    article["article_content"] = text["target"]["content"]
                    article["content_type"] = types
                    print(article["article_content"])

                    yield article
                elif types == "zvideo":
                    print("本次爬取的类型：%s"%types)
                    videos = ZhihuVideoTime()
                    videos["video_title"] = text["target"]["title"]
                    videos["video_url"] = text["target"]["thumbnail_extra_info"]["playlist"]["ld"]["url"]
                    videos["content_type"] = types
                    print(videos["video_url"])

                    yield videos
        else:
            print("不在本次抓取范围")
        pass

    def get_signature(self):
        h = hmac.new(key='d1b964811afb40118a12068ff74a12f4'.encode('utf-8'), digestmod=sha1)
        grant_type = 'password'
        client_id = 'c3cef7c66a1843f8b3a9e6a1e3160e20'
        source = 'com.zhihu.web'
        h.update((grant_type + client_id + source + self.time_str).encode('utf-8'))
        # self.form_data.update({"signature": h.hexdigest(), "timestamp": self.time_str})
        return h.hexdigest()

    def captcha(self,response):
        image = response.body.decode("utf8")
        image = json.loads(image)
        img_base64 = image["img_base64"]
        print(response.status)
        with open('captcha.jpg', 'wb') as f:
            f.write(base64.b64decode(img_base64))
            f.close()

        img = Image.open('captcha.jpg')
        plt.imshow(img)
        capt = input("输入验证码：")
        yield FormRequest("https://www.zhihu.com/api/v3/oauth/captcha?lang=en", meta={"capt": capt},
                    formdata={'input_text': capt}, headers=self.headers, callback=self.check_cpatcha)
        pass

    def entrypt(self):
        with open(r'./jsencrypt/encrypt.js', 'r', encoding='utf8') as f:
            js = execjs.compile(f.read(), cwd=r"C:\Users\Administrator\node_modules")
            result = js.call('b', parse.urlencode(self.form_data))
        return result

    def first_page(self,response):
        # 获取session_token
        # print(response.status,response.encoding)
        # print(response.text)
        # print(response.body.decode(response.encoding))
        # self.session_token = response.text.css("#js-initialData::text").re_first(r"session_token=(\d{32})")
        self.session_token = re.search(r"session_token=(\w{32})",response.text).group(1)
        content_dict = {"session_token": self.session_token,
                        "page_number": 1,
                        "after_id": 6}
        for i in range(1, 3):
            content_dict["page_number"] += 1
            content_dict["after_id"] = (content_dict["page_number"] - 1) * 6 - 1
            content_url = "https://www.zhihu.com/api/v3/feed/topstory/recommend?session_token={session_token}&desktop=true&page_number={page_number}&limit=6&action=down&after_id={after_id}&ad_interval=-1".format(
                **content_dict)
            self.start_urls.append(content_url)
        print(self.start_urls)
        for url in self.start_urls:
            yield scrapy.Request(url, dont_filter=True, headers=self.headers,callback=self.content_url)

        pass

    def login(self,response):
        print(response.status,response.url)
        print(response.body)
        print("登录成功")
        yield scrapy.Request("https://www.zhihu.com/",dont_filter=True, headers=self.headers,callback=self.first_page)


    def check_cpatcha(self,response):
        result = response.body.decode("utf8")
        print(result)
        self.form_data.update({'captcha': response.meta.get("capt"),"signature":self.get_signature(),"timestamp": self.time_str})

        data = self.entrypt()

        # yield [
        #     FormRequest("https://www.zhihu.com/api/v3/oauth/sign_in", body=data, headers=self.headers_login,
        #                 callback=self.login)]
        # yield [FormRequest("https://www.zhihu.com/api/v3/oauth/sign_in",body=json.dumps(data),headers=self.headers_login,callback=self.login)]
        yield scrapy.Request("https://www.zhihu.com/api/v3/oauth/sign_in",method="post",headers=self.headers_login,body=data,callback=self.login)
        # yield scrapy.Request("https://www.zhihu.com/api/v3/oauth/sign_in", method="post", headers=self.headers_login,body=json.dumps(data), callback=self.login)

    def get_captcha(self,response):
        show_captcha = response.body.decode("utf8")
        result = json.loads(show_captcha)
        if result["show_captcha"] == True:
            yield scrapy.Request("https://www.zhihu.com/api/v3/oauth/captcha?lang=en",method="put",headers=self.headers,callback=self.captcha)
        else:
            print("此次登录无需验证码")
        pass

    def get_scrf(self,response):
        # response.headers.getlist("Set-Cookie")
        csrf = response.request.headers["Cookie"].decode("utf8").split(";")[2]
        csrf = csrf.split("=")[-1]
        self.headers_login.update({"x-xsrftoken": csrf})

        yield scrapy.Request("https://www.zhihu.com/api/v3/oauth/captcha?lang=en", headers=self.headers,callback=self.get_captcha)

    def start_requests(self):
        #strat_requests必须返回一个可迭代对象

        return [scrapy.Request('https://www.zhihu.com/', dont_filter=True, headers=self.headers, callback=self.get_scrf)]

