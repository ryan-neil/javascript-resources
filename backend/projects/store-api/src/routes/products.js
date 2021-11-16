const express = require('express');
const router = express.Router();

// import products controller
const { getAllProductsStatic, getAllProducts } = require('../controllers/products');

// get all products
router.get('/', getAllProducts);
// get all static products
router.get('/static', getAllProductsStatic);

// export the products router
module.exports = router;
