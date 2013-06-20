#!/usr/bin/env python

from google.appengine.ext import webapp
from google.appengine.ext.webapp import template
from google.appengine.ext.webapp.util import run_wsgi_app

import os
import datetime
import hashlib

# Different nicknames given to copies of Reel in the wild
NICKNAMES= '|'.join([
  'reel.+',
  'spin',
  'thrsixty'
])

EXPIRE_DAYS= 30
IGNORE_DAYS= 365
HTTP_TIME= "%a, %d %b %Y %H:%M:%S GMT"


reel_versions= [
    ('',        '1.2.1'), # Latest stable
    ('-edge',   '1.2.2'), # Bleeding edge
    ('-1.2',    '1.2.1'), # v1.2.x
    ('-1.2.0',  '1.2'),
    ('-1.2.1',  '1.2.1'),
    ('-1.1',    '1.1.4'), # v1.1.x
    ('-1.1.0',  '1.1'),
    ('-1.1.1',  '1.1.1'),
    ('-1.1.2',  '1.1.2'),
    ('-1.1.3',  '1.1.3'),
    ('-1.1.4',  '1.1.4'),
    ('-1.0',    '1.0.4'), # v1.0.x
    ('-1.0.4',  '1.0.4')
]

reel_flavors= [
    ('',         '-min'),    # Naked, minified
    ('-bundle',  '-bundle'), # Minified, bundled with dependencies
    ('-devel',   '')         # Human-readable
]

reel_cursors= [ # v1.2.x
    ('',            ''),
    ('-drag',       '-drag'),
    ('-drag-down',  '-drag-down')
]

reel_cursor_images= [ # v1.2.x
    ('-drag',       '-drag'),
    ('-drag-down',  '-drag-down')
]


class GreetingsHandler(webapp.RequestHandler):
  def get(self):
      output(self, ContentFromFile('text/x-web-markdown', 'README.markdown'))


class ReadmeHandler(webapp.RequestHandler):
  def get(self, version, format):
      self.redirect('https://github.com/pisi/Reel/blob/v'+lookup(version, reel_versions)+'/README.markdown')


class NothingHandler(webapp.RequestHandler):
  def get(self):
      output(self, '')


class JavascriptHandler(webapp.RequestHandler):
  def get(self, version, flavor):
      output(self, ContentFromFile('application/javascript', 'scripts/v'+lookup(version, reel_versions)+lookup(flavor, reel_flavors)+'.js'), 'v'+lookup(version, reel_versions))


class CursorsHandler(webapp.RequestHandler):
  def get(self, nickname, cursor):
      output(self, ContentFromFile('image/x-icon', 'cursors/v1.2.x/jquery.reel'+lookup(cursor, reel_cursors)+'.cur'))


class OldCursorsHandler(webapp.RequestHandler):
  def get(self, nickname, cursor):
      output(self, ContentFromFile('image/gif', 'cursors/v1.1.x/jquery.reel.cursor'+lookup(cursor, reel_cursors)+'.gif'))


class BadgesHandler(webapp.RequestHandler):
  def get(self, badge):
      output(self, ContentFromFile('image/gif', 'badges/'+badge+'.gif'))


class LicencesHandler(webapp.RequestHandler):
  def get(self, license):
      output(self, ContentFromFile('text/plain', 'licenses/'+license+'.txt'))


class FaviconHandler(webapp.RequestHandler):
  def get(self):
      ignore(self)


class BlankImageHandler(webapp.RequestHandler):
  def get(self):
      output(self, ContentFromFile('image/gif', 'blank.gif'))


class RobotsHandler(webapp.RequestHandler):
  def get(self):
      output(self, ContentFromFile('text/plain', 'robots.txt'))


class JavascriptEmbedHandler(webapp.RequestHandler):
  def get(self, version):
      self.embed(lookup(version, reel_versions))

  def embed(self, version):

    data= {
      "host": os.environ['HTTP_HOST'],
      "path": '/jquery.reel',
      "version": version,
      "ext": '.js'
    }

    try:
        params= dict(p.split("=") for p in os.environ['QUERY_STRING'].split("&"))
        options= []

        for option in params:
            if option == "id":
                data["id"]= params[option]
            else:
                if params[option].isdigit():
                    options.append(option+': '+params[option])
                else:
                    options.append(option+': "'+params[option]+'"')
              
        data["options"]= ", ".join(options)

    except ValueError:
        output(self, Content('text/plain', 'Embedded Reel requires at least the `id` query parameter to be set'))
        return

    output(self, Content('application/javascript', template.render('embed.jst', data)))






application= webapp.WSGIApplication([

    ('/jquery\.reel(-\d\.\d.?\d?|-edge)?(-bundle|-devel)?\.js', JavascriptHandler),
    ('/jquery\.(reel|'+NICKNAMES+')(-.+)?\.cur', CursorsHandler),
    ('/jquery\.(reel|'+NICKNAMES+')\.cursor(-.+)\.gif', OldCursorsHandler),
    ('/jquery\.reel-([1-4])?\.gif', BadgesHandler),
    ('/jquery\.reel(-.+)?\.js/embed', JavascriptEmbedHandler),
    ('/jquery\.reel(-\d\.\d.?\d?|-edge)?(\.html)?', ReadmeHandler),
    ('/(MIT|GPL)-LICENSE\.txt', LicencesHandler),
    ('/blank\.gif', BlankImageHandler),
    ('/favicon\.ico', FaviconHandler),
    ('/robots\.txt', RobotsHandler),
    ('/', GreetingsHandler),
    ('/.*', NothingHandler)

], debug= True)

def main():
    run_wsgi_app(application)






def lookup(needle, heystack):
    for pair in heystack:
        if pair[0] == needle:
            return pair[1]
    return heystack[0][1]





class Content:
  def __init__(self, content_type, body):
      self.body = body
      self.content_type = content_type
      self.etag = hashlib.sha1(body).hexdigest()
      self.last_modified = datetime.datetime.now()

class ContentFromFile:
  def __init__(self, content_type, path):
      fh= open(path, 'r')
      self.body = fh.read()
      fh.close
      self.content_type = content_type
      self.etag = hashlib.sha1(self.body).hexdigest()
      info= os.stat(path)
      self.last_modified= datetime.datetime.fromtimestamp(info[8])









def output(self, content, etag=False):

    now= datetime.datetime.now()
    expires= now + datetime.timedelta(days= EXPIRE_DAYS)
    self.response.headers['Cache-Control']= 'public, max-age='+str(EXPIRE_DAYS * 86400) # 86400 seconds per day
    self.response.headers['Expires']= expires.strftime(HTTP_TIME)

    if not content:
        self.response.headers['Last-Modified'] = now.strftime(HTTP_TIME)
        self.error(404)
        return

    etag = etag or content.etag
    last_modified = content.last_modified.strftime(HTTP_TIME)

    serve = True
    if 'If-None-Match' in self.request.headers:
        etags = [x.strip() for x in self.request.headers['If-None-Match'].split(',')]
        if etag in etags:
            serve = False
    if 'If-Modified-Since' in self.request.headers:
        last_seen = datetime.datetime.strptime(self.request.headers['If-Modified-Since'], HTTP_TIME)
        if last_seen >= content.last_modified.replace(microsecond=0):
            serve = False

    self.response.headers['Content-Type'] = content.content_type
    self.response.headers['ETag'] = '%s' % (etag)
    self.response.headers['Last-Modified'] = last_modified

    if serve:
        self.response.set_status(200)
        self.response.out.write(content.body)
    else:
        self.response.set_status(304)


def ignore(self):

    now= datetime.datetime.now()
    expires= now + datetime.timedelta(days= IGNORE_DAYS)
    self.response.headers['Cache-Control']= 'public, max-age='+str(IGNORE_DAYS * 86400) # 86400 seconds per day
    self.response.headers['Expires']= expires.strftime(HTTP_TIME)

    self.response.set_status(204)




if __name__ == "__main__":
    main()
