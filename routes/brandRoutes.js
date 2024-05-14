const express = require('express')
const app = express.Router()
const brandController = require('../controllers/brandsController')
const verifyTokenMiddleware = require('../config/middleWare')

app.post('/addBrand' , verifyTokenMiddleware, brandController.addBrand)

app.get('/getAllBrand', verifyTokenMiddleware, brandController.getAllBrand)

module.exports = app;