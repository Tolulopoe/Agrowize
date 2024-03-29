const mysql = require('mysql2')
const pool = mysql.createPool(
    {connectionLimit:10,
        host:"localhost",
        password:"",
        user:"root",
        database:"agrowize"
    })
    // const pool = mysql.createPool(
    //     {connectionLimit:10,
    //         host:"bad1gmrjzdocbzwtw8hc-mysql.services.clever-cloud.com",
    //         password:"Nxso4gYxEVdfI03ijuku",
    //         user:"utqzsoda1xmmcywg",
    //         database:"bad1gmrjzdocbzwtw8hc"
    //     })
function getConnection(){
    return new Promise((resolve,reject)=>{
pool.getConnection((err,connection)=>{
    if(err)
    {reject(err)}
    else
    {
        resolve(connection)
    }
})
    })
}
function runQueryValues(conn,sqlQuery,values){
   return new Promise((resolve,reject)=>{
conn.query(sqlQuery,values,(err,result)=>{
    if(err){
        reject(err)
    }
    else{
        resolve(result)
    }
})
   })
}
function generateOTP() { 
    // Function to generate OTP 
            // Declare a digits variable 
            // which stores all digits 
            let digits = '0123456789'; 
            let OTP = ''; 
            let len = digits.length 
            for (let i = 0; i < 4; i++) { 
                OTP += digits[Math.floor(Math.random() * len)]; 
            } 
            return OTP; 
        } 
        
        console.log("OTP of 4 digits: ") 
        console.log(generateOTP());

// const sql = "insert into product(product_name,unit_price,quantity,total)values(?,?,?,?)";
const signupSyntax = "insert into Users(fullName,email,password,confirmPassword,create_time)values(?,?,?,?,?)";
const loginSyntax = "select * from Users where email = ?";
const updateLoginSyntax = "update Users set password = ? where email = ?";
const updateProfileSyntax = "UPDATE Users SET fullName = COALESCE(?, fullName), email = COALESCE(?, email), Nickname = COALESCE(?, Nickname), Contact = COALESCE(?, Contact) WHERE email = ?";
module.exports = {getConnection,runQueryValues,generateOTP,signupSyntax,loginSyntax,updateLoginSyntax,updateProfileSyntax}