# -*- coding: utf-8 -*-

# Define here the models for your spider middleware
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/spider-middleware.html
import random
import time
import os
import sys
from fake_useragent import UserAgent

from scrapy.http import HtmlResponse
from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.common import keys

from scrapy import signals

from sou import settings
from fake_useragent import UserAgent


class SouSpiderMiddleware:
    # Not all methods need to be defined. If a method is not defined,
    # scrapy acts as if the spider middleware does not modify the
    # passed objects.

    @classmethod
    def from_crawler(cls, crawler):
        # This method is used by Scrapy to create your spiders.
        s = cls()
        crawler.signals.connect(s.spider_opened, signal=signals.spider_opened)
        return s

    def process_spider_input(self, response, spider):
        # Called for each response that goes through the spider
        # middleware and into the spider.

        # Should return None or raise an exception.
        return None

    def process_spider_output(self, response, result, spider):
        # Called with the results returned from the Spider, after
        # it has processed the response.

        # Must return an iterable of Request, dict or Item objects.
        for i in result:
            yield i

    def process_spider_exception(self, response, exception, spider):
        # Called when a spider or process_spider_input() method
        # (from other spider middleware) raises an exception.

        # Should return either None or an iterable of Request, dict
        # or Item objects.
        pass

    def process_start_requests(self, start_requests, spider):
        # Called with the start requests of the spider, and works
        # similarly to the process_spider_output() method, except
        # that it doesn’t have a response associated.

        # Must return only requests (not items).
        for r in start_requests:
            yield r

    def spider_opened(self, spider):
        spider.logger.info('Spider opened: %s' % spider.name)


class SouTestSpiderMiddleware:

    def process_spider_input(self, response, spider):
        print('spider 中间件被调用')

    def process_spider_outupt(self,response, result,spider):
        print("spider 解析完成")
        print(result)
        # for i in result:
        #     yield i
        # time.sleep(5)


class SouDownloaderMiddleware:
    # Not all methods need to be defined. If a method is not defined,
    # scrapy acts as if the downloader middleware does not modify the
    # passed objects.

    @classmethod
    def from_crawler(cls, crawler):
        # This method is used by Scrapy to create your spiders.
        s = cls()
        crawler.signals.connect(s.spider_opened, signal=signals.spider_opened)
        return s

    def process_request(self, request, spider):
        # Called for each request that goes through the downloader
        # middleware.

        # Must either:
        # - return None: continue processing this request
        # - or return a Response object
        # - or return a Request object
        # - or raise IgnoreRequest: process_exception() methods of
        #   installed downloader middleware will be called
        return None

    def process_response(self, request, response, spider):
        # Called with the response returned from the downloader.

        # Must either;
        # - return a Response object
        # - return a Request object
        # - or raise IgnoreRequest
        return response

    def process_exception(self, request, exception, spider):
        # Called when a download handler or a process_request()
        # (from other downloader middleware) raises an exception.

        # Must either:
        # - return None: continue processing this exception
        # - return a Response object: stops process_exception() chain
        # - return a Request object: stops process_exception() chain
        pass

    def spider_opened(self, spider):
        spider.logger.info('Spider opened: %s' % spider.name)


class RandomUserAgentMiddlware(object):
    # 随机更换user-agent
    def __init__(self, crawler):
        super(RandomUserAgentMiddlware, self).__init__()
        self.ua = UserAgent()
        self.ua_type = crawler.settings.get("RANDOM_UA_TYPE", "random")

    @classmethod
    def from_crawler(cls, crawler):
        return cls(crawler)

    def process_request(self, request, spider):
        def get_ua():
            return getattr(self.ua, self.ua_type)  # 相当于 self.ua.random()

        request.headers.setdefault('User-Agent', get_ua())

class ProxyMiddleware:
    def process_request(self, request, spider):
        # proxy = random.choice(settings["PROXIES"])
        # request.meta["proxy"] = proxy
        headers = {'User-Agent': str(UserAgent().random)}
        if spider.name == "shij":
            request.headers = headers

        print("代理设置成功")



class UAMiddleware:

    def process_request(self, request, spider):

        ua = random.choice(settings["USER_AGENT_LIST"])
        request.headers["User-Agent"]= ua


class SelenimuMiddleware(object):

    # def __init__(self):
    #     chrome_options = webdriver.ChromeOptions()
    #     chrome_options.add_experimental_option("excludeSwitches", ['enable-automation'])
    #     browser = webdriver.Chrome(executable_path="../tools/chromedriver.exe", options=chrome_options)


    def process_request(self,request, spider):

        if spider.name == "taobao":
            spider.browser.get(request.url)
            time.sleep(2)
            spider.browser.refresh()
            self.action(spider.browser)
            time.sleep(2)
            return HtmlResponse(url=spider.browser.current_url, body=spider.browser.page_source, encoding="utf-8",request=request)

    def action(self,browser):
        login_button = browser.find_element_by_css_selector("div.site-nav-menu-hd .h")
        print(login_button)
        login_button.click()
        uname = browser.find_element_by_css_selector("input[name='fm-login-id']")
        pwd = browser.find_element_by_css_selector('input[name="fm-login-password"]')
        uname.send_keys("13585635173")
        pwd.send_keys("zbjaidafang@1314")
        time.sleep(2)
        cnt = browser.find_element_by_css_selector('#nc_1_n1z')
        tracks = self.distance()
        self._move_to_gap(browser,cnt,tracks)
        time.sleep(2)
        self.login(browser)

    @staticmethod
    def distance():
        distance = 260
        track = []
        current = 0
        t = 1
        v = 260
        if current < distance:
            x = v*t
            current = current + x
            track.append(round(x))
        return track

    @staticmethod
    def _move_to_gap(browser,cnt,tracks):
        ActionChains(browser).click_and_hold(cnt).perform()
        for i in tracks:
            ActionChains(browser).move_by_offset(xoffset=i,yoffset=0).perform()
        ActionChains(browser).release().perform()

    @staticmethod
    def login(browser):
        login_button = browser.find_element_by_css_selector('button[type="submit"]')
        login_button.click()
