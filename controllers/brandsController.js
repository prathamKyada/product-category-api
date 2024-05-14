const brand = require('../models/brand')
const product = require('../models/product')

const addBrand = async (req, res) => {
    try {
        const addbrand = await brand.create(req.body);
        res.status(200).send({ message: 'Data added Successful', data: addbrand })
    } catch (error) {
        console.log("Error > ", error)
        res.status(500).send({ message: "Internal server error" });
    }
}

const getAllBrand = async (req, res) => {
    try {
        const allbrand = await brand.find()
        res.status(200).send(allbrand)
    } catch (error) {
        console.log("Error > ", error)
        res.status(500).send({ message: "Internal server error" });
    }
}

const getBrand = async (req, res) => {
    try {
        const brandid = req.params.brand_id;
        const brand = await product.find({ brand_id: brandid })
        res.status(200).send(brand)
    } catch (error) {
        console.log("Error > ", error);
        res.status(500).send({ message: 'Internal server error' })
    }
}

module.exports = {
    addBrand,
    getAllBrand,
    getBrand
}