const {getConnection,runQueryValues,generateOTP} = require('../model/dbPool')
async function forgotPassword(req,res){
    const credential = {
        email: req.body.username
    }
    const connection = await getConnection();
    try {
        const result =  runQueryValues(connection,[credential.email])
        result.then(rs=>{ 
        if (rs) {
generateOTP
}
})
    }
catch(err){
    console.log(err)
    }   
} 
module.exports = {forgotPassword}


//     const connection = await getConnection();
//    try{
//     const result1 = await runQueryValues(connection, loginSyntax, [credentials.email])
// if(result1){
//     const result =  await runQueryValues(connection ,[credentials.email])
//     res.status(200).json({message:result})
// }
// } 
