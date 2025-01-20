const { verifyToken } = require('../../middleware/verifyToken');
const { getProducts } = require('../controllers/product.controller');
const express = require('express');
const router = express.Router();

router.get('/', verifyToken, getProducts);
// Similarmente, agregar POST, PUT, DELETE

module.exports = router;