const category = require('../models/category');

const addCategory = async (req, res) => {
    try {
        const addCategory = await category.create(req.body);
        res.status(201).send(addCategory);
    } catch (error) {
        console.error('Error adding category:', error);
        res.status(400).send({ message: 'Failed to insert data' });
    }
}

const getAllCategory = async ( req, res ) => {
    try {
        // Fetch all categories from the database
        const allCategory = await category.find();

        // Send the list of categories as the response
        res.status(200).json(allCategory);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).send({ message: 'Internal server error' });
    }
}



module.exports = {
    addCategory,
    getAllCategory
}
