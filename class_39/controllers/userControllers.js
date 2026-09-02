const User =require('../models/user')
const addUser=async (req,res)=>{
     
const a=await User.create({
    name:req.body.name,
    age:req.body.age,
    profile:req.file.path
})
console.log(req.file)
res.json(a)
}
const getUser=async(req,res)=>{
const a=await User.find();
res.json(a)
}
module.exports={
    addUser,getUser
}