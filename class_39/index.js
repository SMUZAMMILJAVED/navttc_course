const express=require('express')
const app=express();
const dotenv=require('dotenv');
const mongoConnect = require('./config/db');
const users=require('./routes/users')

dotenv.config()
mongoConnect()
const port=4000
app.use('/uploads',express.static('uploads'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/user',users)
app.listen(port,()=>{
    console.log("server is running at port",port)
})