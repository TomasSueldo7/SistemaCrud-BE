const { verifyToken } = require('../../middleware/verifyToken');
const { getProducts, getProductByName,createProduct, editProduct, deleteProduct} = require('../controllers/product.controller');
const express = require('express');
const router = express.Router();

router.get('/', verifyToken, getProducts);
router.get('/:name', verifyToken, getProductByName);
router.post('/', verifyToken, createProduct);
router.put('/:id', verifyToken, editProduct);
router.delete('/:id', verifyToken, deleteProduct);

module.exports = router;