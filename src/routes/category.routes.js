const express = require('express');
const { verifyToken } = require('../../middleware/verifyToken');
const { getCategories } = require('../controllers/category.controller');
const router = express.Router();

router.get('/', verifyToken, getCategories);
// Similarmente, agregar POST, PUT, DELETE

module.exports = router;