const Product = require("../model/productModel")

const getProduct = async (req ,res)=>{
    try {
        pro = await Product.find()
        res.status(200).json({"Product":pro})
    } catch (error) {
        res.status(500).json(error)
    }

}

module.exports = {getProduct}