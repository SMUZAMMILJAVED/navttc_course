const express=require('express');
const { createUser, loginUser } = require('../controllers/auth');
const router=express.Router()
router.post('/login',async(req,res)=>{

const resp=await loginUser(req.body.email,req.body.password);
res.send(resp)
})
router.post('/signup',async(req,res)=>{
    try {
        await createUser(req.body.email,req.body.password);
    res.send("account created!");
    } catch (error) {
        throw error;
    }
    
})
module.exports=router;