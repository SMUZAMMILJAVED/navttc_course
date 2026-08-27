const express=require("express");
const { addProduct,getProducts,deleteProduct,getProduct,updateProduct } = require("../controllers/productController");
const router=express.Router();
router.post('/',addProduct)
router.get('/',getProducts)
router.get('/:id',getProduct)
router.delete('/:id',deleteProduct)
router.put('/:id',updateProduct)
module.exports=router;