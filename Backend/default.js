const data = require('./data.js')
const Product = require('./model/productModel.js')

const defaultfun = async ( req , res)=>{
    // await Product.deletMany({})
    await Product.insertMany(data)
    
}

module.exports = defaultfun