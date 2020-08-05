#-*-conding:utf8-*-

from scrapy.cmdline import execute

import os
import sys

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
execute(['scrapy','crawl','shij'])
# execute(['scrapy','crawl','zhihu'])
# execute(["scrapy","crawl","taobao"])