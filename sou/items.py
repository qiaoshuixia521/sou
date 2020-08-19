# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy
from scrapy.loader.processors import MapCompose, TakeFirst, Join
import re
from scrapy.loader import ItemLoader

from models.es_types import ShijType, ZhihuType
#链接到elasticsearch
from elasticsearch_dsl.connections import connections
#链接到es
# es = connections.create_connection(shijType._doc_type.using)

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


def gen_suggests(index, info_tuple):
    es = connections.create_connection(ZhihuType._doc_type.using)  #创建一个es的链接d

    used_words = set()
    suggests = []
    for text,weight in info_tuple:
        if text:
            #使用es的分词接口
            words = es.indices.analyze(index=index,analyzer="ik_max_word", params={'filter':["lowercase"]}, body=text)
            anylyzed_words = set([r["token"] for r in words["tokens"] if len(r["token"]) > 1])
            new_words = anylyzed_words - used_words  # 集合的减法
        else:
            new_words = set()

        if new_words:
            suggests.append({"input":list(new_words),"weight":weight})
    return suggests

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
        shij.front_image_path = self["front_image_path"]
        shij.structure = self["structure"]

        shij.suggest_word = gen_suggests(shij._doc_type.index, ((shij.estate, 10), (shij.structure, 7)))


        shij.save() #保存到es


class ZhihuArticleTiem(scrapy.Item):

    article_title = scrapy.Field()
    article_content = scrapy.Field()
    content_type = scrapy.Field()

    def save_to_es(self):
        zhihu = ZhihuType()
        zhihu.title = self["article_title"]
        zhihu.content = self["article_content"]
        zhihu.types = self["content_type"]
        zhihu.suggest = gen_suggests(zhihu._doc_type.index, ((zhihu.title, 10), (zhihu.content, 7)))

        zhihu.save()


class ZhihuVideoTime(scrapy.Item):

    video_title = scrapy.Field()
    video_url = scrapy.Field()
    content_type = scrapy.Field()

    def save_to_es(self):
        zhihu = ZhihuType()
        zhihu.title = self["video_title"]
        zhihu.content = self["video_url"]
        zhihu.types = self["content_type"]
        zhihu.suggest = gen_suggests(zhihu._doc_type.index, ((zhihu.title, 10), (zhihu.content, 7)))

        zhihu.save()

class ZhihuQuestionItem(scrapy.Item):
    question_title = scrapy.Field()
    answer = scrapy.Field()
    content_type = scrapy.Field()

    def save_to_es(self):
        zhihu = ZhihuType()
        zhihu.title = self["question_title"]
        zhihu.content = self["answer"]
        zhihu.types = self["content_type"]
        zhihu.suggest = gen_suggests(zhihu._doc_type.index, ((zhihu.title, 10), (zhihu.content, 7)))
        zhihu.save()





