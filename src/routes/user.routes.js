const express = require('express');
const { verifyToken } =require('../../middleware/verifyToken');
const { getUsers, createUser, editUser, deleteUser } = require('../controllers/user.controller');
const router = express.Router();

router.get('/', verifyToken, getUsers);
router.post('/', verifyToken, createUser);
router.put('/:id', verifyToken, editUser);
router.delete('/:id', verifyToken, deleteUser);

module.exports = router;