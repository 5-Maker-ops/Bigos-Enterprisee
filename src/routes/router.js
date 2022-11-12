const sale = await Sale.create({ user: content.userId,  ...content })
user.sales = user.sales.concat(sale._id)
await user.save();
1
2
return res.status(201).json({ data: sale });1
const { createSale,  } = require('../controllers/sale');1
router.get('/sale', createSale);1
const express = require('express');
const router = express.Router();

const { createUser, getAllUsers } = require('../controllers/user');

const { createUser, getAllUsers, getOneUser, updateOne, deleteOne } = 
require('../controllers/user');
const { createSale,  } = require('../controllers/sale');
// User route
router.post('/user', createUser);
router.get('/user', getAllUsers);
router.get('/user/:id', getOneUser);
router.put('/user/:id', updateOne);
router.delete('/user/:id', deleteOne);
// Sale route
router.post('/sale', createSale);

module.exports = router;