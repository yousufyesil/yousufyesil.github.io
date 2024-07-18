import cgi, cgitb

cgitb.enable()

form = cgi.FieldStorage()

print("Content-type:text/html")

print("Test")