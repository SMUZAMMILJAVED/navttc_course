const express=require('express');
const auth=require('./routes/auth');
const app=express();
app.use(express.json())//extract data from body
app.use('/auth',auth)//middleware=>route auth
app.listen(4000,()=>{
    console.log("server is running...");
    
})