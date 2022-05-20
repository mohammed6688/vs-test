var express = require("express");
const app = express();

var response;

app.get('/', function (req, res) {
    response = 'This is version 2 of the app.' + '\n';
    //send the response to the client
    res.send(response);
});

app.get('/mars', function(req, res) {
    res.send('Hello Mars!\n');
  });

app.listen(8080,function(){
        console.log("exaple app listener");
});