const express=require('express');
const path=require('path');
const form=require('./routes/form')
const app=express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(process.cwd(),'public')))
app.use('/form',form)
app.listen(4000,()=>{
    console.log("server is running...");
    
})