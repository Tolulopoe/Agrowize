const bcrypt = require('bcryptjs')
const bcSaltRounds = bcrypt.genSaltSync(10)
const {getConnection,runQueryValues,signupSyntax} = require('../model/dbPool')
async function signup(req,res){
    const currentDateTime = new Date();
    const createdAt = currentDateTime.toISOString();  
    const credentials = {
        fullName: req.body.fullname,
        email: req.body.username,
        password: bcrypt.hashSync(req.body.userpassword,bcSaltRounds),
        confirmPassword: bcrypt.hashSync(req.body.confirmpassword,bcSaltRounds),
        create_time: createdAt,
    }
    
    if (credentials.fullName=="" || credentials.email=="" || credentials.password=="" ||credentials.confirmPassword==""){
            res.json({
                status: 412,
                message: "Empty input fields!"
            })
            } else if (!/^[a-zA-Z ]*$/.test(credentials.fullName)){
                res.json({
                    status: 412,
                    message: "Invalid Full Names!"
                })
            }else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(credentials.email)){
                res.json({
                    status:412,
                  message: "Invalid email entered"  
                })
            }else if(credentials.password.length <8){
                res.json({
                        status:"FAILED",
                      message: "Password must have at least 8 characters"  
                })
    }
    console.log(credentials)
    //check if use already exists
    const existingUser = await user.findOne({email})
    if(existingUser){
        return res.status(400).json({
            success: false,
            message: "User already exists,please login instead"
        })
    }
    const connection = await getConnection();
   try{
   const result =  await runQueryValues(connection,signupSyntax,[credentials.fullName,credentials.email,credentials.password,credentials.confirmPassword,credentials.create_time])
res.status(200).json({message:result})
   }
   catch(err){
   console.log(err)
   } 
   connection.release()
}  

module.exports = {signup}