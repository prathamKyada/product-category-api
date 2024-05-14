const user = require('../models/users')
const jwt = require('jsonwebtoken')
const addUser = async (req, res) => {
    try {
        const addbrand = await user.create(req.body);
        const token = jwt.sign({ addbrand }, 'abc123', { expiresIn: '300s' });
        // Update the user document with the token
        addbrand.token = token;
        await addbrand.save();

        console.log("Token:", token);
        res.json({  addbrand, message: 'Data added Successful' });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ message: "Internal server error" });
    }
}

module.exports = {
    addUser
}
