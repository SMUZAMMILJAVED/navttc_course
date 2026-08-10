const express=require('express');
const { createUser, loginUser } = require('../controllers/auth');
const router=express.Router();
router.post('/signup',async(req,res)=>{
    
   await createUser(req.body.email,req.body.password)
   res.send("user created!" )
})
router.post('/login',async(req,res)=>{
    
 const resp=  await loginUser(req.body.email,req.body.password)
   res.send(resp )
})
module.exports=router;