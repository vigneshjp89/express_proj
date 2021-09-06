const dbservice=require('../services/dbservice.js');

exports.getAllOauthApps= function(){
    
    return new Promise((resolve,reject)=>{
        
        var db=dbservice.database;
        var oauthCollection=db.collection("oauthapps");
        oauthCollection.find().toArray().then(function(result){
      //console.log("RESULT: "+result);
        var outputJSON={
            "isSuccess":true,
            "data":result
        }
        console.log(outputJSON);
        resolve(outputJSON);
    }).catch((e)=>{reject(e)});
    });
     //return res.json(movies);*
  }