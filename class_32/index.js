const express=require('express');
const cors=require('cors');
const auth=require('./routes/auth')
const result=require('./routes/result');
const product=require('./routes/product');
const { verify } = require('./middlewares/auth');
const app=express()
app.use(cors())
app.use(express.json())//data extract from body (json)
app.use("/auth",auth)
app.use("/result",verify,result)
app.use('/product',product)
app.listen(4000,()=>{
    console.log("server is running at port 4000");
    
})