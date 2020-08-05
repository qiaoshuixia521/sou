# -*- coding: utf-8 -*-

# Scrapy settings for sou project
#
# For simplicity, this file contains only settings considered important or
# commonly used. You can find more settings consulting the documentation:
#
#     https://docs.scrapy.org/en/latest/topics/settings.html
#     https://docs.scrapy.org/en/latest/topics/downloader-middleware.html
#     https://docs.scrapy.org/en/latest/topics/spider-middleware.html
import os
import sys

BOT_NAME = 'sou'

SPIDER_MODULES = ['sou.spiders'] #存放spider的路径
NEWSPIDER_MODULE = 'sou.spiders'


# Crawl responsibly by identifying yourself (and your website) on the user-agent
#USER_AGENT = 'sou (+http://www.yourdomain.com)'

# Obey robots.txt rules
ROBOTSTXT_OBEY = False

# Configure maximum concurrent requests performed by Scrapy (default: 16)
#CONCURRENT_REQUESTS = 32

# Configure a delay for requests for the same website (default: 0)
# See https://docs.scrapy.org/en/latest/topics/settings.html#download-delay
# See also autothrottle settings and docs
#DOWNLOAD_DELAY = 3
# The download delay setting will honor only one of:
#CONCURRENT_REQUESTS_PER_DOMAIN = 16
#CONCURRENT_REQUESTS_PER_IP = 16

# Disable cookies (enabled by default)
#COOKIES_ENABLED = False

# Disable Telnet Console (enabled by default)
#TELNETCONSOLE_ENABLED = False

# Override the default request headers:
#DEFAULT_REQUEST_HEADERS = {
#   'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
#   'Accept-Language': 'en',
#}

# Enable or disable spider middlewares
# See https://docs.scrapy.org/en/latest/topics/spider-middleware.html
# SPIDER_MIDDLEWARES = {
#    'sou.middlewares.SouSpiderMiddleware': 543,
#    'sou.middlewares.SouTestSpiderMiddleware': 544,
# }

# Enable or disable downloader middlewares
# See https://docs.scrapy.org/en/latest/topics/downloader-middleware.html
DOWNLOADER_MIDDLEWARES = {
   # 'sou.middlewares.SouDownloaderMiddleware': 543,
   # 'sou.middlewares.ProxyMiddleware':544
   "sou.middlewares.SelenimuMiddleware":545,
}

# Enable or disable extensions
# See https://docs.scrapy.org/en/latest/topics/extensions.html
#EXTENSIONS = {
#    'scrapy.extensions.telnet.TelnetConsole': None,
#}

# Configure item pipelines
# See https://docs.scrapy.org/en/latest/topics/item-pipeline.html
ITEM_PIPELINES = {
   # 'sou.pipelines.SouPipeline': 300,
   # 'sou.pipelines.SouPipelineD': 300,
   # 'scrapy.pipelines.images.ImagesPipeline': 500,
   # 'sou.pipelines.HouseImagePipeline':542,
   # 'sou.pipelines.JsonExporterPipleline':245,
   # 'sou.pipelines.MysqlPipeline':543,
   # 'sou.pipelines.MysqlTwisterdPipline':4,

}

# Enable and configure the AutoThrottle extension (disabled by default)
# See https://docs.scrapy.org/en/latest/topics/autothrottle.html
#AUTOTHROTTLE_ENABLED = True
# The initial download delay
#AUTOTHROTTLE_START_DELAY = 5
# The maximum download delay to be set in case of high latencies
#AUTOTHROTTLE_MAX_DELAY = 60
# The average number of requests Scrapy should be sending in parallel to
# each remote server
#AUTOTHROTTLE_TARGET_CONCURRENCY = 1.0
# Enable showing throttling stats for every response received:
#AUTOTHROTTLE_DEBUG = False

# Enable and configure HTTP caching (disabled by default)
# See https://docs.scrapy.org/en/latest/topics/downloader-middleware.html#httpcache-middleware-settings
#HTTPCACHE_ENABLED = True
#HTTPCACHE_EXPIRATION_SECS = 0
#HTTPCACHE_DIR = 'httpcache'
#HTTPCACHE_IGNORE_HTTP_CODES = []
#HTTPCACHE_STORAGE = 'scrapy.extensions.httpcache.FilesystemCacheStorage'

# MONGODB_HOST = "127.0.0.1"
# MONGODB_PORT = 27017
# MONGODB_DBNAME = "xinfuli"
# MONGODB_DOCNAME = "xinfuhous"


IMAGAE_MIN_HEIGHT = 100
IMAGE_MAX_WIDTH = 100

IMAGES_URLS_FIELD = "image_urls"
project_dir = os.path.abspath(os.path.dirname(__file__))
IMAGES_STORE = os.path.join(project_dir,'images')  #图片的存放路径


MYSQL_HOST = '127.0.0.1'
MYSQL_DBNAME = "sou"
MYSQL_USER = 'root'
MYSQL_PASSWORD = ""


PROXIES = [
   "https://114.217.243.25:8118"
]
