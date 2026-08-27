const Product=require('../models/product')
const addProduct=async(req,res)=> {
 const resp=await Product.create(req.body);
 res.json(resp)
}
const getProducts=async(req,res)=> {
 const resp=await Product.find();
 res.json(resp)
}
const deleteProduct=async(req,res)=> {
 const resp=await Product.findByIdAndDelete(req.params.id);
 res.json(resp)
}
const getProduct=async(req,res)=> {
 const resp=await Product.findById(req.params.id);
 res.json(resp)
}
const updateProduct=async(req,res)=> {
 const resp=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
 res.json(resp)
}
module.exports={addProduct,getProducts,deleteProduct,getProduct,updateProduct}