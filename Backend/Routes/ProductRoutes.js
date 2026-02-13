const express = require('express')
const productController = require('../Controler/productControler')

const route = express.Router()

route.get('/get',productController.getProduct)

module.exports = route