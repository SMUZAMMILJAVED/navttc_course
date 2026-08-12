const express=require('express');
const products=require('../data/products.json')
const router=express.Router()
router.get('/',(req,res)=>{


res.send(products)
})

module.exports=router;