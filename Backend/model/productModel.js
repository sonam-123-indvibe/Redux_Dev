const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
    name:String,
    dis:String,
    img:String,
    price:Number
})

const Product = mongoose.model('product',productSchema)

module.exports = Product

