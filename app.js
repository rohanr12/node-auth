var express = require('express');
var bodyParser = require('body-parser');
var User = require('./models/user');
var mongoose = require('mongoose');
var session = require('express-session');

mongoose.connect('mongodb://localhost:27017/node-auth', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);


var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: 'shhh',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 3600000
    }
}));

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

app.post('/register', function(req, res){
    User.create(req.body, function(err, createdUser){
        if(err){
            console.log(err);
        }
        console.log(createdUser);
        res.send('You have logged in. this is the template dashboard');
        res.end();
    });

    req.session.userId = createdUser._id;
})

app.post('/login', function(req, res){
    User.findOne({"username": req.body.username}, function(err, foundUser){
        if(err){
            console.log(err);
        }
        console.log(foundUser);
        req.session.userId = foundUser._id;
        res.send("User authenticated. Welcome to dashboard");
        res.end();
    });
})

app.listen(8000, function(){
    console.log('listening');
});

