var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.listen(8000, function(){
    console.log('listening');
});

app.post('/', function(req, res){
    var userName = req.body.name;
    var password = req.body.password;
    console.log(req.body);
});
