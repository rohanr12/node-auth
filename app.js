var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('view engine', 'pug');

app.listen(8000, function(){
    console.log('listening');
});

app.get('/', function(req, res){
    res.render('index');
});

app.get('/login', function(req, res){
    res.render('login');
});

app.get('/register', function(req, res){
    res.render('register');
})

app.post('/', function(req, res){
    var userName = req.body.name;
    var password = req.body.password;
    console.log(req.body);
});


