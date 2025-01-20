const express = require('express');
const { verifyToken } =require('../../middleware/verifyToken');
const { getUsers, createUser } = require('../controllers/user.controller');
const router = express.Router();

router.get('/', verifyToken, getUsers);
router.post('/', verifyToken, createUser);

module.exports = router;