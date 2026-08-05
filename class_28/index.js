const express=require('express');
const app=express();
const form=require('./routes/form');
app.use(express.urlencoded())
app.use(express.json())
app.use((req,res,next)=>{
req.data="ahmed"
next();
})
// app.use((req,res,next)=>{
//     console.log(req.data)
// res.send('hello world from 2nd middleware!')
// })
app.use('/form',form)

app.listen(4000,()=>{
    console.log("server is running at port 4000");
    
});