const bcrypt = require('bcryptjs')
const bcSaltRounds = bcrypt.genSaltSync(10)
const {getConnection,runQueryValues,updateLoginSyntax,loginSyntax} = require('../model/dbPool')
async function resetPassword(req,res){
    const credentials = {
        password: bcrypt.hashSync(req.body.userpassword,bcSaltRounds),
        newPassword: bcrypt.hashSync(req.body.newpassword,bcSaltRounds)
    }
   
    const connection = await getConnection();
   try{
    const result1 = await runQueryValues(connection, loginSyntax, [credentials.password])
if(result1){
    const result =  await runQueryValues(connection ,updateLoginSyntax,[credentials.newPassword,credentials.confirmPassword])
    res.status(200).json({message:result})
}
   
   


}
   catch(err){
   console.log(err)
   }   
   }

module.exports = {resetPassword}