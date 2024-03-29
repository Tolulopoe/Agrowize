const {getConnection,runQueryValues,updateProfileSyntax} = require('../model/dbPool')
async function updateProfile(req,res){
    const currentDateTime = new Date();
    const updatedAt = currentDateTime.toISOString();  
    const update = {
        Name: req.body.fullname,
        emailb: req.body.username,
        Nickname: req.body.nickname,
        Contact: req.body.phoneno,
        updatetime: updatedAt
    }
    console.log(update)
    const connection = await getConnection();
   try{
   const result =  await runQueryValues(connection,updateProfileSyntax,[update.Name,update.emailb,update.Nickname,update.Contact,update.updatetime])
res.status(200).json({message:result})
   }
   catch(err){
   console.log(err)
   }   
   }
module.exports = {updateProfile}