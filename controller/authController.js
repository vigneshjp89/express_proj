const dbservice=require('../services/dbservice.js');

exports.getAllOauthApps=async function(){
    
    return new Promise(async (resolve,reject)=>{
        
        var data={};
        console.log(dbservice);
        await dbservice.connect(async err => {
            const collection = await dbservice.db("oauthserver").collection("oauthapps");
            //console.log(await collection.find().toArray());
            data=await collection.find().toArray();
            if(data==null){
                reject({"error":"error in no collection"});
            }
            resolve(data);
        });
    }).catch(e=>{console.log(e)});
     //return res.json(movies);*
  }