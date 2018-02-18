/*
Create an Express.js server that processes PUT  requests.

For instance:

    PUT /message/526aa677a8ceb64569c9d4fb

As a response to these requests, return the SHA1 hash of the current date
plus the sent ID:

    require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + id)
      .digest('hex')

-------------------------------------------------------------------------------

## HINTS

To handle PUT requests use:

    app.put('/path/:NAME', function(req, res){...});

To extract parameters from within the request handlers, use:

    req.params.NAME


 » To print these instructions again, run: 
 » To execute your program in a test environment, run: 
 » To verify your program, run: 
 » For help run: 

*/
    var path = require('path')
    var bodyParser=require('body-parser')
var express=require('express')
var app = express()

app.put('/message/:id',function(req,res){
    var id= req.params.id
    var str=require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() +id)
    .digest('hex')
    res.send(str)
})
 

   app.listen(process.argv[2]||3000)




 

