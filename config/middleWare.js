
const jwt = require('jsonwebtoken'); 
const Dbconfig = require('../config/dbConfig')


const nonAuthentication = [
  '/brands/getAllBrand',
  '/categories/getAllCategory',
  '/products/getAllProduct',
  '/products/getProduct/:product_id',
  '/categories/categoryWiseProduct/:category_id',
  '/brands/getBrand/:brand_id'
];

const verifyTokenMiddleware = async (req, res, next) => {
  const currentRoute = req.originalUrl;
  const desiredOutput = currentRoute.split('/').shift();
  console.log("Original Url:", desiredOutput);

  if (!nonAuthentication.includes(currentRoute)) {
    const token = req.headers.token; 

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    try {
      const decoded = jwt.verify(token, Dbconfig.JWT_SECRET_KEY); 
      console.log("Decoded token:", decoded); 
      // pratham
      next(); 
    } catch (error) {
      console.error("Error:", error);
      if (error.name === 'JsonWebTokenError') {
        return res.status(401).json({ message: 'Invalid token' });
      }
      return res.status(401).json({ message: 'Unauthorized' });
    }
  } else {
    next();
  }
};

module.exports = verifyTokenMiddleware

