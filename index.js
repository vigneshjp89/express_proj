var express=require('express');
var app=express();
var logger=require('morgan');
var bodyParser=require('body-parser');
var cookieParse=require('cookie-parser');

app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/',function(req,res,next){
    console.log('***Page loaded***');
    res.send("***Page Loaded***");
});

module.exports=app;