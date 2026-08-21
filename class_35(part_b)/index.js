const express=require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config()
const port=process.env.PORT ||4000
const mongoConnect=require('./config/db')
mongoConnect();
app.listen(port,()=>{
    console.log("server running...",port)
});
