/*JADE
 Exercise 3 of 8

Create an Express.js app with a home page rendered by Jade template engine.

The homepage should respond to /home

The view should show the current date using 'new Date.toDateString()'

We use 'toDateString() to simply return the date in a human-readable format wihtou the tim'


-------------------------------------------------------------------------------

## HINTS

The Jade template file index.jade is already provided:

    h1 Hello World
    p Today is #{date}.

This is how to specify path in a typical Express.js app when the folder is
:

    app.set('views', path.join(__dirname, 'templates'))

However, to use our , the path to  will be provided as
process.argv[2].  You are welcome to use your own jade file!

To tell Express.js app what template engine to use, apply this line to the
Express.js configuration:

    app.set('view engine', 'jade')

Instead of Hello World's , the  function accepts
a template name and presenter data:

    res.render('index', {date: new Date().toDateString()})

We use  to simply return the date in a human-readable format
without the time.

----------------------------------------------------------
*/
    var path = require('path')    
    var express = require('express')
    var app = express()
    app.set('view engine','jade')
    app.set('views', process.argv[3])
    app.get('/home', function(req, res){
        res.render('index', {date: new Date().toDateString()})

    })
    
   app.listen(process.argv[2])
