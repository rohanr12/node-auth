var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/login', function(req, res){
    res.render('login');
});

app.get('/register', function(req, res){
    res.render('register');
});

app.post('/login', function(req, res){
    console.log(req.body);
    console.log(req.body.username);
    console.log(req.body.password);
    res.send('this is the post route');
})

app.listen(8000, function(){
    console.log('listening');
});

