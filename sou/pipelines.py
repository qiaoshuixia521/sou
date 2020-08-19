# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html
import os


import json
from pymongo import *
from scrapy.pipelines.images import ImagesPipeline
from scrapy.exporters import JsonItemExporter
import pymysql
import pymongo
from twisted.enterprise import adbapi
import pymysql.cursors
from models.es_types import ShijType
from w3lib.html import remove_tags

from sou import settings


class SouPipeline:
    '''
    写入文件
    '''

    def __init__(self):
        self.file = open("shij.json", 'w', encoding="utf8")

    def process_item(self, item, spider):
        content = json.dumps(dict(item), ensure_ascii=False, indent=4)
        self.file.write(content)
        return item

    def open_spider(self, spider):
        pass

    def close_spider(self, spider):
        self.file.close()


class SouPipelineD:
    '''
    存入mongodb数据库
    '''

    def __init__(self):
        # host = settings[MONGODB_HOST]
        # port = settings["MONGODB_PORT"]
        # dbname = settings["MONGODB_DBNAME"]
        host = "127.0.0.1"
        port = 27017
        dbname = "xinfuli"
        print(host, port, dbname)

        client = MongoClient(host=host, port=port)

        mdb = client[dbname]
        self.post = mdb["xinfuhous"]

    def process_item(self, item, spider):
        data = dict(item)
        self.post.insert(data)
        return item


class HouseImagePipeline(ImagesPipeline):

    # def __init__(self):
    #     pass

    def get_media_requests(self, item, info):
        #在发用下载请求之前调用，方法本身就是发送下载图片的请求
        request_objs = super(HouseImagePipeline,self).get_media_requests(item,info)
        for request_obj in request_objs:
            request_obj.item = item
        return request_objs

    def file_path(self,request, response=None, info=None):
        path = super(HouseImagePipeline, self).file_path(request, response, info)
        category = request.item.get("estate")
        image_store = settings.IMAGES_STORE
        # image_store = "E:/coding/sou/sou/images"
        category_path = os.path.join(image_store,category)
        image_name = path.replace("full/","")
        image_path = os.path.join(category_path,image_name)
        return image_path



    def item_completed(self, results, item, info):
        for ok, value in results:
            image_file_path = value["path"]
            item["front_image_path"] = image_file_path

        return item


class JsonExporterPipleline(object):

    def __init__(self):
        self.file = open("scrapy_shij.json", 'wb')
        self.exporite = JsonItemExporter(self.file, encoding="utf-8", ensure_ascii=False)
        self.exporite.start_exporting()

    def process_item(self, item, spider):
        print("===================================",spider.name)
        self.exporite.export_item(item)
        return item

    def closs_spider(self, spider):
        self.exporite.finish_exporting()
        self.file.close()


class MysqlPipeline(object):
    # 同步的形式写入mysql
    def __init__(self):
        self.conn = pymysql.connect('127.0.0.1', 'root', '', 'sou', use_unicode=True)
        self.cursor = self.conn.cursor()

    def process_item(self, item, spider):
        # insert_sql = "select * from shij"
        insert_sql = """
            insert into shij(price, estate,structure,acreage,rentway,image_path,estate_url)
            values (%s,%s,%s,%s,%s,%s,%s)
        """
        self.cursor.execute(insert_sql, (item['price'], item['estate'], item['structure'], item['acreage'],item['rentway'], item["front_image_path"],item["estate_url"]))
        self.conn.commit()


class MysqlTwisterdPipline(object):
    # twister 异步插入数据
    def __init__(self, dbpool):
        self.dbpool = dbpool  # from_setting 返回的对象

    @classmethod
    def from_settings(cls, settings):
        dbparms = dict(
            host=settings["MYSQL_HOST"],
            db=settings["MYSQL_DBNAME"],
            user=settings["MYSQL_USER"],
            passwd=settings["MYSQL_PASSWORD"],
            charset='utf8',
            cursorclass=pymysql.cursors.DictCursor,
            use_unicode=True,
        )
        dbpool = adbapi.ConnectionPool("pymysql", **dbparms)

        return cls(dbpool)

    def process_item(self, item, spider):
        query = self.dbpool.runInteraction(self.do_insert, item)
        query.addErrback(self.handle_error, item, spider)  # 异步处理异常函数

    def handle_error(self, failure, item, spider):
        print(failure)
    #cursor 是dbpool 中拿出来的一个操作游标
    def do_insert(self, cursor, item):
        insert_sql = """
                    insert into shij(price, area,address,release_time,traffice,image_url_id)
                    values (%s,%s,%s,%s,%s,%s)
                """
        cursor.execute(insert_sql, (item['price'], item['area'], item['address'], item['release_time'],
                                    item['traffic'], item["image_url_id"]))


class ElasticsearchPipline(object):

    def process_item(self, item, spider):
        #将item转换为es的数据
        # shij = ShijType()
        # shij.price = item["price"]
        # shij.price = item["estate"]
        # shij.structure = item["structure"]
        # shij.rentway = item["rentway"]
        # shij.acreage = item["acreage"]
        # shij.estate_url = item["estate_url"]
        # shij.front_image_path = item["front_image_path"]


        item.save_to_es()

        return item


class MongodbPipline(object):

    def __init__(self):
        self.client = pymongo.MongoClient("localhost",27017)
        self.db = self.client.zhihu
        self.content = self.db.questions


    def process_item(self,item,spider):

        if spider.name == "zhihu":
            print(type(item))
            # item = {"name":"zhangsan"}
            # self.content.insert_one(item)
            #插入的数据需要时dict 或 json
            print(item.items())
            print(dict(item))
            self.content.insert_one(dict(item)).inserted_id



if __name__ == "__main__":

    mondo = MongodbPipline()
    mondo.process_item("action","zhihu")
