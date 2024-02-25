const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);
router.get('/:id', userController.getUser);
router.delete('/:id', userController.deleteUser);


module.exports = router;
