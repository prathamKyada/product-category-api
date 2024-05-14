const product = require('../models/product');
const jwt = require('jsonwebtoken')
// const express = require('express');
// const product = require('../models/product');
// const 


const getAllProducts = async (req , res) => {
    try {
        const allProduct = await product.aggregate([
            {
                $lookup: {
                    from: 'categories',
                    localField: 'category_id',
                    foreignField: '_id',
                    as: 'categoryDetails'
                }
            },
            {
                $lookup: {
                    from: 'brands',
                    localField: 'brand_id',
                    foreignField: '_id',
                    as: 'brandDetails'
                }
            },
            // {
            //     $addFields: {
            //         categoryName: '$categoryDetails.name', // Assuming 'name' is the field in your category documents that you want to include
            //         brandName: '$brandDetails.name' // Assuming 'name' is the field in your brand documents that you want to include
            //     }
            // },
            {
                $project: {
                    categoryDetails: 0,
                    brandDetails: 0
                }
            }
        ]).exec();

        console.log("All Products with Category and Brand Details > ", allProduct);
        res.status(200).send(allProduct);
    } catch (error) {
        console.log("Error > ", error);
        res.status(500).send({ message: "Internal server error" });
    }
}

const addProduct = async (req, res) => {
    try {
        const { pName, price, brand_id, category_id, description, inStock, countInStock, imagePath } = req.body;

        const addProduct = await product.create({
            pName,
            brand_id,
            category_id,
            description,
            price,
            inStock,
            countInStock,
            imagePath
        });

        const token = jwt.sign({ addProduct }, 'abc123', { expiresIn: '300s' }, { algorithm: 'PS384' });

        res.status(201).send({ message: 'Product added successfully', data: addProduct, token });
    } catch (error) {
        console.log("Error:", error);
        res.status(400).send({ message: "Failed to insert data", Error: error });
    }
}

const getProduct = async (req , res) => {
    try {
        const productId = req.params.product_id;
        const product = await product.find({productId})
        res.status(200).send({product})
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ message: 'Internal server error' });
    }
}

const categoryWiseProduct = async (req, res) => {
    try {
        const categoryId = req.params.category_id;
        const productsByCategory = await product.find({ category_id: categoryId });
        res.status(200).send(productsByCategory);
    } catch (error) {
        console.log("Error > ", error);
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
    getAllProducts,
    addProduct,
    getProduct,
    categoryWiseProduct,
    getBrand
};