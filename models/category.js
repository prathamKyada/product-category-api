const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    brandName: {
        type:[String],
        required: true
    },
    withAccessories:{
        type:Boolean,
        enum:['true' , 'false'],
        required:true
    }
})

const category = new mongoose.model("Category", categorySchema)
module.exports = category