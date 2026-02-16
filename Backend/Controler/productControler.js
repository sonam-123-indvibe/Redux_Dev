const Product = require("../model/productModel")
const User = require('../model/UserModel')
// const jwt = require('jsonwebtoken')

const getProduct = async (req ,res)=>{
    try {
        pro = await Product.find()
        res.status(200).json({"Product":pro})
    } catch (error) {
        res.status(500).json(error)
    }

}


// const saveUser = async (req ,res) =>{
//     const {name , email , password} = req.body

//     const newUser = await User.create({
//         name,
//         email,
//         password
//     })

//     const token = jwt.sign({user_id:newUser.id,user_email:newUser.email},"This is Our SecretKey",{expirein:"1d"})
// }

module.exports = {getProduct}