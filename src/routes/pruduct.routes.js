const express = require('express');
const { getProducts } = require('../controllers/product.controller');
const router = express.Router();

router.get('/', getProducts);
// Similarmente, agregar POST, PUT, DELETE

module.exports = router;