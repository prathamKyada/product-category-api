const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName:{
        type:String
    },
    email:{
        type:String
    },
    token:{
        type: String
    }
})

const category = new mongoose.model("User", userSchema)
module.exports = category