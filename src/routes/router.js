const express = require('express');
const router = express.Router();
const { createUser, getAllUsers, getOneUser, updateOne, deleteOne } = 
require('../controllers/user');
const { createSales, getAllSales  } = require('../controllers/sales');
// User route
router.post('/user', createUser);
router.get('/user', getAllUsers);
router.get('/user/:id', getOneUser);
router.put('/user/:id', updateOne);
router.delete('/user/:id', deleteOne);
1
// Sale route
router.post('/sales', createSale);
router.get('/sales', getAllSales);

module.exports = router;