var express=require('express');
var app=express();
var logger=require('morgan');
var bodyParser=require('body-parser');
var cookieParse=require('cookie-parser');
var session = require('express-session');
var oauthapp=require('./controller/authController');
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
// app.get('/',function(req,res){
//     res.send("Logged in");
// });
// async function readParams(params){
//     var htmlData="<p>empty string</p>";
//     const ht=[];
//     return new Promise((resolve,reject)=>{
//         for(var key in params){
//             htmlData+="<p>"+key+"==>"+params[key]+"</p><br/>";
//             ht.push(htmlData);
//         }
//         Promise.all(ht).then((resp)=>{
//             resolve(resp);
//         }).catch((e)=>{reject(e)});
//         reject("errror");
//     });
// }
app.get('/authorize',async function(req,res){
    console.log(req.query);
    var htmldata="<p>empty string</p>";
    res.send(await oauthapp.getAllOauthApps());
    // if(req.query!=null){
        
    //     res.send(resp);
    // }else{
    // res.send('empty request');
    // }
});
app.get('/logout',function(req,res){
    console.log(req.headers.cookie);
    res.clearCookie('name');
    res.redirect('/');
});
app.get('*',function(req,res){
    res.status(403);
    res.send('<h1>403 Forbidden</h1>');
});
module.exports=app;