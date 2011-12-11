import os

reel_cdn= {
    "host": os.environ['HTTP_HOST'],
    "path": '/jquery.reel',
    "version": '-1.1.3',
    "flavour": '-bundle',
    "ext": '.js'
}

print "Content-Type: application/javascript"
print ""
print "/*"
print "          @@@@@@@@@@@@@@"
print "      @@@@@@@@@@@@@@@@@@@@@@"
print "    @@@@@@@@          @@@@@@@@"
print "  @@@@@@@                @@@@@@@"
print " @@@@@@@                  @@@@@@@"
print " @@@@@@@                  @@@@@@@"
print " @@@@@@@@     @          @@@@@@@@"
print "  @@@@@@@@@  @@@       @@@@@@@@@"
print "   @@@@@@@@@@@@@@   @@@@@@@@@@@"
print "     @@@@@@@@@@@@@    @@@@@@@"
print "       @@@@@@@@@@@@     @@@"
print "          @@@@@@"
print "         @@@@"
print "        @@"
print " *"
print " *"
print " *"
print " *"
print " */"
print "(function(a, b){"

try:

    # Parse the URL query string and feed `params` hash
    params = dict(p.split("=") for p in os.environ['QUERY_STRING'].split("&"))

    try:

        # Extract `.reel()` options from the params
        options = []
        for option in params:
            if option != "id":
                if params[option].isdigit():
                    options.append(option + ': ' + params[option])
                else:
                    options.append(option + ': "' + params[option] + '"')

        # And write them into `params`
        params["options"] = ", ".join(options)

        print "  function c(){ a('#%(id)s').reel({ %(options)s }) }" % params
        print "  b && c() || a('head').append( a('<script>', {" \
              " type: 'application/javascript'," \
              " src: 'http://%(host)s%(path)s%(version)s%(flavour)s%(ext)s'" \
              " }).bind('load', c));" % reel_cdn

    except KeyError:
        print "  throw 'Embedded Reel requires the `id` query parameter to be set'"

except ValueError:
    print "  throw 'Malformed URL parameters of embedded jQuery Reel'"

print "})(jQuery, jQuery.reel);"
