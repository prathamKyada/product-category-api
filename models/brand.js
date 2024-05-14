const mongoose = require('mongoose');
// const category = require('./category');

const brandName = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const BrandName = new mongoose.model("Brands", brandName)
module.exports = BrandName;