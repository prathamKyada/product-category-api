const mongoose = require('mongoose')

// const category = require('./category')
const productSchema = new mongoose.Schema({
    pName: {
        type: String
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    brand_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brands'
    },
    BrandList: {
        type: mongoose.Schema.Types.String,
        ref: 'Category'
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    inStock:{
        type: Boolean
    },
    countInStock: {
        type: Number
    },
    imagePath: {
        type: String
    }
})

const product = new mongoose.model("Products", productSchema)
module.exports = product