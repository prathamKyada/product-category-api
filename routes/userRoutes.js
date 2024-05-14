const express = require('express')
const app = express.Router()
const userController = require('../controllers/userController')
const verifyTokenMiddleware = require('../config/middleWare')

app.post('/user', verifyTokenMiddleware , userController.addUser)

module.exports = app