const { createUser, findUser } = require("../models/user")
const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require("../data/key");
exports.createUser=async(email,password)=>{
    try{
          const uid=Date.now()
    await createUser(email,password,uid)
    }catch(err){
throw err;
    }
   
}
exports.loginUser=async(email,password)=>{
try{
       const user=await findUser(email);
    if(user){

         const result=await bcrypt.compare(password,user.password)
if(!!user && result){
    const token= jwt.sign({ email }, SECRET_KEY);
  return  ` Login token : ${token}`
}else{
    return "invalid pass"
}
    }else{
        return "user not found!"
    }
 //
   
}catch(err){
    throw err;
}
}