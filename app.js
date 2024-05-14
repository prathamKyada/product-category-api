const express = require('express');
require('./db/conn')
const app = express();
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const brandsRoutes = require('./routes/brandRoutes')
const userRoutes = require('./routes/userRoutes')
app.use(express.json())
require('dotenv').config();

app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
app.use('/brands', brandsRoutes)
app.use('/user', userRoutes)

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
