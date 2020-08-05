# -*- coding: utf-8 -*-
import scrapy
from scrapy.loader import ItemLoader

from sou.items import SouItem, shijItemLoader, ShijItem
from scrapy import Request

from sou.utils.common import get_md5
from urllib import parse

class ShijSpider(scrapy.Spider):
    name = 'shij'
    allowed_domains = ['sh.5i5j.com']
    start_urls = ['https://sh.5i5j.com/zufang/']
    custom_settings = {
        "ITEM_PIPELINES": {
            'sou.pipelines.HouseImagePipeline': 542,  # shij
            # 'sou.pipelines.JsonExporterPipleline':2,
            # 'sou.pipelines.MysqlPipeline': 543,  # shij
            # 'sou.pipelines.MysqlTwisterdPipline':4,
            "sou.pipelines.ElasticsearchPipline": 543,
        }
    }


    # def parse(self, response):
    #     print("在spider input之后执行,回调函数被调用")
    #     # with open("shij.html","w",encoding="utf8") as f:
    #     #     f.write(response.text)
    #     items = []
    #     count = 0
    #     for each in response.xpath("/html/body/div[6]/div[1]/div[2]/ul/li"):
    #         #16th is invalid
    #         # item = SouItem()
    #         count+=1
    #         if count == 16:
    #             continue
    #         item_loader = shijItemLoader(item=SouItem(), selector=each)
    #         item_loader.add_xpath('price', "string(div[2]/div[1]/div/p[1])")
    #         item_loader.add_xpath('area', "div[2]/div[1]/p[1]/text()")
    #         item_loader.add_xpath("address", "string(div[2]/div/p[2])")
    #         item_loader.add_xpath('release_time', "div[2]/div/p[3]/text()")
    #         item_loader.add_xpath("traffic", "string(div[2]/div[2])")
    #         item_loader.add_value("image_url_id", get_md5(response.url))
    #         print(count)
    #
    #
    #         # shij_item = item_loader.load_item()
    #         # print("=======================================")
    #         # yield shij_item
    #         scrapy.Request("https://sh.5i5j.com/ershoufang",meta={"item":item_loader},callback=self.test_spider)

    def parse(self,response):
        hourse_url = response.xpath('//h3[@class="listTit"]/a/@href').extract()
        for url in hourse_url:
            url = parse.urljoin(response.url,url)
            print(url)
            yield scrapy.Request(url,callback=self.test_spider)


    def test_spider(self,response):

        item_loader = shijItemLoader(item=ShijItem(), response=response)
        item_loader.add_xpath('estate_url','//div[@class="zushous"]/ul/li[1]/a/@href')
        item_loader.add_xpath('price', 'string(//*[@class="de-price"])')
        item_loader.add_xpath('estate','/html/body/div[5]/div[2]/div[2]/div[2]/ul/li[1]/a/text()')
        item_loader.add_xpath("structure", 'string(//div[@class="jlyoubai fl jlyoubai1"]/div)')
        item_loader.add_xpath('acreage', 'string(//div[@class="jlyoubai fl jlyoubai2"]/div)')
        item_loader.add_xpath("rentway",'/html/body/div[5]/div[2]/div[2]/div[2]/ul/li[2]/text()')
        # item_loader.add_xpath("image_urls", '//a[@class="fancyboxs"]/img/@src')
        item_loader.add_xpath("image_urls",'//a[@class="fancyboxs"]/@href')
        shij_item = item_loader.load_item()
        yield shij_item







