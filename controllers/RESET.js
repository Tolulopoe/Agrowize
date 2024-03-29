const bcrypt = require('bcryptjs')
const bcSaltRounds = bcrypt.genSaltSync(10)
const {getConnection,runQueryValues,updateLoginSyntax,loginSyntax} = require('../model/dbPool')
async function resetPassword(req,res){
    const credentials = {
        newpassword: bcrypt.hashSync(req.body.newuserpassword,bcSaltRounds)
    }
    const connection = await getConnection();
   try{
    const result =  await runQueryValues(connection ,updateLoginSyntax,[credentials.userpassword])
    res.status(200).json({message:result})
}
   catch(err){
   console.log(err)
   }   
}

module.exports = {resetPassword}