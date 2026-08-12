const { createUser, findUser } = require("../models/user")
const bcrypt=require('bcrypt');
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
    const result=await bcrypt.compare(password,user.password)
if(!!user && result){
  return  " Login"
}else{
    return "invalid pass"
}
}catch(err){
    throw err;
}
}