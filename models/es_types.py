import datetime

from elasticsearch_dsl import DocType, Date, Nested, Boolean, \
    analyzer, Completion, Keyword, Text, Integer

from elasticsearch_dsl.connections import connections
connections.create_connection(hosts=["localhost"],timeout=100)


class ShijType(DocType):
    price = Text()
    estate = Text(analyzer="ik_max_word")
    structure = Text()
    acreage = Text()
    rentway = Keyword()
    image_urls = Keyword()
    estate_url = Text()
    front_image_path = Text()

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


if __name__ == "__main__":
    ShijType.init()