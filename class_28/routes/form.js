const express=require('express');
const path=require('path');
const router= express.Router();
const filePath=path.join(process.cwd(),'veiws','form.html')
router.get('/',(req,res)=>{
res.sendFile(filePath);
});
router.post('/submit',(req,res)=>{
    const result=req.body;
    
res.send(result)
});
module.exports=router; 