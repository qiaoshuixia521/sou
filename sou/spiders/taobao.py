# -*- coding: utf-8 -*-
import scrapy
from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.common import keys

class TaobaoSpider(scrapy.Spider):
    name = 'taobao'
    allowed_domains = ['*']
    start_urls = ['http://*/']

    def __init__(self):
        chrome_options = webdriver.ChromeOptions()
        chrome_options.add_experimental_option("excludeSwitches", ['enable-automation'])
        self.browser = webdriver.Chrome(executable_path="E:/coding/多线程爬虫/tools/chromedriver.exe", options=chrome_options)
        super(TaobaoSpider,self).__init__()

    def parse(self, response):
        print(response.status)
        pass

    def start_requests(self):
        return [scrapy.Request("https://www.taobao.com")]
