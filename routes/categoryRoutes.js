const express = require('express')
const app = express.Router()
const categoryController = require('../controllers/categoryController')
const verifyTokenMiddleware = require('../config/middleWare')



app.post('/addCategory',verifyTokenMiddleware , categoryController.addCategory)

app.get('/getAllCategory', verifyTokenMiddleware,  categoryController.getAllCategory)

module.exports = app