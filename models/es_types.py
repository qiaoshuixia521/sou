import datetime

from elasticsearch_dsl import DocType, Date, Nested, Boolean, \
    analyzer, Completion, Keyword, Text, Integer
from elasticsearch_dsl.analysis import CustomAnalyzer as _CustomAnalyzer

from elasticsearch_dsl.connections import connections
connections.create_connection(hosts=["localhost"],timeout=100)

class CustomAnalyzer(_CustomAnalyzer):
    def get_analysis_definition(self):
        return {}


ik_analyzer = CustomAnalyzer("ik_max_word", filter=["lowercase"])#filter lowercase 大小写转换


class ShijType(DocType):
    price = Text()

    estate = Text(analyzer="ik_max_word")
    structure = Text()
    acreage = Text()
    rentway = Keyword()
    image_urls = Keyword()
    estate_url = Text()
    front_image_path = Text()

    # 由于elasticsearch_dsl 源码的问题，需要自定义我们的analyzer
    suggest_word = Completion(analyzer=ik_analyzer)#自动补全

    class Meta:
        index = "shij"
        doc_type = "house"
        settings = {
            "number_of_shards":"2"
        }
    # class Index:
    #     name = 'shij'
    #     doc_type = "hourse"
    #     settings = {
    #         "number_of_shards": 2
    #     }
    #
    # def save(self, **kwargs):
    #     self.lines = len(self.body.split())
    #     return super(ShijType, self).save(**kwargs)
    #
    # def is_published(self):
    #     return datetime.now() > self.published_from

class ZhihuType(DocType):
    title = Text()
    content = Text()
    types = Keyword()
    suggest = Completion(analyzer=ik_analyzer)

    class Meta:
        index = "zhihu"
        doc_type = "contents"
        settings = {
            "number_of_shards":"2"
        }


if __name__ == "__main__":
    # ShijType.init()
    ZhihuType.init()