# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy
from scrapy.loader.processors import MapCompose, TakeFirst, Join
import re
from scrapy.loader import ItemLoader

from models.es_types import ShijType


def add_price(value):
    #value值为item中的price字段的值
    prince = re.search(r'\d+',value).group()
    return prince

def save_list(value):
    return value


#自定义item_loader
class shijItemLoader(ItemLoader):
    default_output_processor = TakeFirst()



class SouItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    price = scrapy.Field(
        # input_processor = MapCompose(add_price), #可以传入多个函数，依次执行但是函数的定义必须在前
        outupt_proessor = TakeFirst() #list中取得第一个
    )
    area = scrapy.Field()
        # output_processor=Join(",")
    # )
    address = scrapy.Field()
    release_time = scrapy.Field()
    traffic = scrapy.Field()
    image_urls = scrapy.Field()
    front_image_path = scrapy.Field()
    image_url_id = scrapy.Field()
    pass


class ShijItem(scrapy.Item):

    price = scrapy.Field()
    estate = scrapy.Field()
    structure = scrapy.Field()
    acreage = scrapy.Field()
    rentway = scrapy.Field()
    image_urls = scrapy.Field(
        output_processor=MapCompose(save_list)
    )
    estate_url = scrapy.Field()
    front_image_path = scrapy.Field()

    def save_to_es(self):
        shij = ShijType()
        shij.price = self["price"]
        shij.estate = self["estate"]
        shij.structure = self["structure"]
        shij.rentway = self["rentway"]
        shij.acreage = self["acreage"]
        shij.estate_url = self["estate_url"]
        shij.front_image_path = self["front_image_path"]
        shij.save() #保存到es



