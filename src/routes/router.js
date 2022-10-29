const express = require('express');
const router = express.Router();

const { createUser, getAllUsers } = require('../controllers/user');

const { createUser, getAllUsers, getOneUser, updateOne, deleteOne } = 
require('../controllers/user');


// User route
router.post('/user', createUser);
router.get('/user', getAllUsers);

const { createUser, getAllUsers, getOneUser, updateOne } = require('../controllers/user');

// User route
router.post('/user', createUser);
router.get('/user', getAllUsers);
router.get('/user/:id', getOneUser);
router.put('/user/:id', updateOne);


const { createUser, getAllUsers, getOneUser } = require('../controllers/user');
// User route
router.post('/user', createUser);
router.get('/user', getAllUsers);
router.get('/user/:id', getOneUser);
router.put('/user/:id', updateOne);
router.delete('/user/:id', deleteOne);

module.exports = router;