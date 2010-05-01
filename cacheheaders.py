#!/usr/bin/env python

import wsgiref.handlers
from google.appengine.ext import webapp

class MainPage(webapp.RequestHandler):

  def output_file(self, path, lastmod):
    import datetime
    try:
      self.response.headers['Cache-Control']='public, max-age=31536000'
      self.response.headers['Last-Modified'] = lastmod.strftime("%a, %d %b %Y %H:%M:%S GMT")
      expires=lastmod+datetime.timedelta(days=365)
      self.response.headers['Expires'] = expires.strftime("%a, %d %b %Y %H:%M:%S GMT")
      fh=open(path, 'r')
      self.response.out.write(fh.read())
      fh.close
      return
    except IOError:
      self.error(404)
      return

  def get(self, dir, file, extension):
    if (dir!='js' and dir!='css' and dir!='images'):
      self.error(404)
      return

    if (extension!='js' and extension!='css' and extension!='jpg' and extension!='png' and extension!='gif'):
      self.error(404)
      return

    if extension=='js':
      self.response.headers['Content-Type'] = 'application/x-javascript'
    elif extension=='css':
      self.response.headers['Content-Type'] = 'text/css'
    elif extension=='jpg':
      self.response.headers['Content-Type'] = 'image/jpeg'
    elif extension=='gif':
      self.response.headers['Content-Type'] = 'image/gif'
    elif extension=='png':
      self.response.headers['Content-Type'] = 'image/png'

    try:
      import os
      import datetime
      path = dir+'/'+file+"."+extension
      info = os.stat(path)
      lastmod = datetime.datetime.fromtimestamp(info[8])
      if self.request.headers.has_key('If-Modified-Since'):
        dt = self.request.headers.get('If-Modified-Since').split(';')[0]
        modsince = datetime.datetime.strptime(dt, "%a, %d %b %Y %H:%M:%S %Z")
        if modsince >= lastmod:
        # The file is older than the cached copy (or exactly the same)
          self.error(304)
          return
        else:
        # The file is newer
          self.output_file(path, lastmod)
      else:
        self.output_file(path, lastmod)
    except:
      self.error(404)
      return

def main():
  application = webapp.WSGIApplication([(r'/(.*)/([^.]*).(.*)', MainPage)], debug=False)
  wsgiref.handlers.CGIHandler().run(application)

if __name__ == "__main__":
  main()
