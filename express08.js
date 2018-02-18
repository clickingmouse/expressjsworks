/*
write a server that reads a file, parses it to JSON and outputs the content
to the user.

The port is passed in .  The file name is passed in .

Respond with:

    res.json(object)

Everything should match the '/books' resource path.

-------------------------------------------------------------------------------

## HINTS

For reading, there's an fs module, e.g.,

    fs.readFile(filename, callback)

While the parsing can be done with :

    object = JSON.parse(string)
*/
    var path = require('path')
    var bodyParser=require('body-parser')
    var fs=require('fs')
var express=require('express')
var app = express()

app.get('/books',function(req,res){
    var filename = process.argv[3]
    fs.readFile(filename, function(err,data){
        if(err)return res.sendStatus(500)
try {
    books =JSON.parse(data) 
}catch (err){ res.send(500)
}        
res.json(books)
    })
})
 

   app.listen(process.argv[2]||3000)




 

