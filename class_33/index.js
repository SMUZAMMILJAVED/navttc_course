const express=require('express');
const cors=require('cors')
const product=require('./routes/products');
const app=express()
app.use(cors())
app.use('/products',product)
app.listen(4000,()=>{
    console.log("server running...");
    
})