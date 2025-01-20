const express = require('express');
const { getCategories } = require('../controllers/category.controller');
const router = express.Router();

router.get('/', getCategories);
// Similarmente, agregar POST, PUT, DELETE

module.exports = router;