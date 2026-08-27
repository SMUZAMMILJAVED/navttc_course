const express=require('express');
const dotenv=require('dotenv');
const product=require('./routes/product')
const mongoConnect=require('./config/db')
dotenv.config()
mongoConnect()
const port=process.env.PORT || 4000
const app=express();
app.use(express.json())//json
app.use(express.urlencoded({extended:false}))//form url encoded
app.use('/product',product)
app.listen(port,()=>{
    console.log("server is running at port",port)
})