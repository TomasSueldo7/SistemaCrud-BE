const { verifyToken } = require('../../middleware/verifyToken');
const { getProducts, createProduct, editProduct, deleteProduct} = require('../controllers/product.controller');
const express = require('express');
const router = express.Router();

router.get('/', verifyToken, getProducts);
router.post('/', verifyToken, createProduct);
router.put('/:id', verifyToken, editProduct);
router.delete('/:id', verifyToken, deleteProduct);

module.exports = router;