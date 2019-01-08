var express = require('express');
var bodyParser = require('body-parser');
var User = require(./models/user);
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/node-auth', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

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
    res.send('this is the post route');
})

app.listen(8000, function(){
    console.log('listening');
});

