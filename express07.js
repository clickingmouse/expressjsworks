/*
Write a route that extracts data from query string in the GET /search URL
route, e.g. ?results=recent&ionclude_tabs=true and then outputs it back to
the user in JSON format.

-------------------------------------------------------------------------------

## HINTS

In Express.js to extract query string parameters, we can use:

    req.query.NAME

To output JSON we can use:

    res.send(object)

*/
    var path = require('path')
    var bodyParser=require('body-parser')
var express=require('express')
var app = express()

app.get('/search',function(req,res){
    var query = req.query
    res.send(query)
})
 

   app.listen(process.argv[2]||3000)




 

