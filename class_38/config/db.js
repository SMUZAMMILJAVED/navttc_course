const mongoose = require('mongoose');
const mongoConnect=async()=>{
  try {
      await mongoose.connect(process.env.MONGO_URI);
console.log("MONGDB CONNECTED");
  } catch (error) {
    console.error(error)
  }
}
module.exports=mongoConnect