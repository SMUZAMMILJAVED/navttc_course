const express=require('express');
const Product = require('../models/product');
const upload = require('../config/multer');
const router=express.Router()
router.post('/',upload.single('image'),async(req,res)=>{
const resp=await Product.create({
    title:req.body.title,
    price:req.body.price,
    image:req.file.path
})
res.json(resp)
})
module.exports=router;