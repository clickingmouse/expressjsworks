/*
Write a route ('/form') that processes HTML form input
(<form><input name='str'/></form>) and prints backwards the  value of str backward.

-------------------------------------------------------------------------------

## HINTS

To handle POST request use the  method which is used the same way as :

    app.post('/path', function(req, res){...})

Express.js uses middleware to provide extra functionality to your web server.

Simply put, a middleware is a function invoked by Express.js before your own
request handler.

Middlewares provide a large variety of functionalities such as logging, serving
static files and error handling.

A middleware is added by calling use() on the application and passing the
middleware as a parameter.

To parse  request bodies Express.js can use 
middleware from the body-parser module.

    var bodyparser = require('body-parser')
    app.use(bodyparser.urlencoded({extended: false}))

Read more about Connect middleware here:

  [https://](https://)

The documentation of the body-parser module can be found here:

  [https://](https://)

Here is how we can flip the characters:

    req.body.str.split('').reverse().join('')

*/
    var path = require('path')
    var bodyParser=require('body-parser')
    var express = require('express')
    var app = express()
    
    app.use(bodyParser.urlencoded({extended:false}))
    app.post('/form', function(req, res){
res.send(req.body.str.split('').reverse().join(''))        
        
    })

   app.listen(process.argv[2]||3000)
