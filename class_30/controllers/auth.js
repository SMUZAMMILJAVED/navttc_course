const { createUser, findUser } = require("../models/user");
const bcrypt = require('bcrypt');
exports.createUser=async(email,password)=>{
const uid=Date.now();
await createUser(email,password,uid)
}

exports.loginUser=async(email,password)=>{

const user=await findUser(email);//null
 const encPass=await bcrypt.compare(password,user.password)
if(!!user && encPass){
   
    return "Login Success"
}else{
    return "Invalid email or password"
}
}