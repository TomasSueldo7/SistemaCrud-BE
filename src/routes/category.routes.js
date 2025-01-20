const express = require('express');
const { verifyToken } = require('../../middleware/verifyToken');
const { getCategories, createCategory, editCategory, deleteCategory } = require('../controllers/category.controller');
const router = express.Router();

router.get('/', verifyToken, getCategories);
router.post('/', verifyToken, createCategory);
router.put('/:id', verifyToken, editCategory);
router.delete('/:id', verifyToken, deleteCategory);


module.exports = router;