const mongoose=require('mongoose')
const mongoConnect=async()=>{
 await   mongoose.connect('mongodb+srv://kayey95370_db_user:ujbu6dXGAVbVU1ko@cluster0.pp560ph.mongodb.net/?appName=Cluster0')
 console.log("mongo connect")
}
module.exports=mongoConnect
