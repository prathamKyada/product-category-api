const mongoose = require('mongoose')
const dbconfig = require('../config/dbConfig')
mongoose.connect(dbconfig.MONGODB_URI).then(() => {
    console.log("connection successful");
}).catch((e) => {
    console.log("No connection");
})