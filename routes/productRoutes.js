const express = require('express')
const app = express.Router()
const productController = require('../controllers/productController')
const verifyTokenMiddleware = require('../config/middleWare')

app.get('/getAllProduct', verifyTokenMiddleware, productController.getAllProducts)

app.post('/addProduct', verifyTokenMiddleware, productController.addProduct)

app.get('/getProduct/:product_id', verifyTokenMiddleware ,productController.getProduct)

app.get('/categoryWiseProduct/:category_id', verifyTokenMiddleware , productController.categoryWiseProduct)

app.get('/getBrand/:brand_id', verifyTokenMiddleware , productController.getBrand)

module.exports = app
