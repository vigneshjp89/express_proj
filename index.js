var express=require('express');
var app=express();
var logger=require('morgan');
var bodyParser=require('body-parser');
var cookieParse=require('cookie-parser');
var session = require('express-session');

app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/',function(req,res,next){
    console.log(req.headers.cookie);
    if(req.headers.cookie==null){
        res.send("Not authenticated");  
    }
    next();
});
app.get('/',function(req,res){
    res.send("Logged in");
});
app.get('/login',function(req,res){
    console.log(req.headers.cookie);
    if(req.headers.cookie!==null)
    res.cookie('name', 'express');
    res.redirect("/");
});
app.get('/logout',function(req,res){
    console.log(req.headers.cookie);
    res.clearCookie('name');
    res.redirect('/');
});

module.exports=app;