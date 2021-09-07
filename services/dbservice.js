// const {MongoClient}=require('mongodb');
// const client=new MongoClient("mongodb+srv://vignesh:Zxcv1234!@cluster0.zisnp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
// exports.createConnection=async function(){
//   try{
//   await client.connect();
//   const database=await client.db("oauthserver");
//   exports.database;
//   }catch(e){
//     console.log("error in mongoclient"+e);
//   }
//   // MongoClient.connect("mongodb+srv://vignesh:Zxcv1234!@cluster0.zisnp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(function(client){
//   //     console.log("connected to db");
//   //     exports.database=client.db("oauthserver");

// //});
// }

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://vignesh:Zxcv1234!@cluster0.zisnp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
module.exports=client;
