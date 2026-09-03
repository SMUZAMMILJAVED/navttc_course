const mongoose = require('mongoose')
const productSchema =new mongoose.Schema(
    {
        title: String,
        price: { type: Number, require: true },
        image:String
    }
)
const Product=mongoose.model('Product',productSchema)
module.exports=Product