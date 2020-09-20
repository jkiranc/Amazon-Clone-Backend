const express = require('express');
const router = express.Router();

// import controller
const { requireSignin } = require('../controllers/auth.controller');
const { readController,readOrderController,writeOrderController } = require('../controllers/user.controller');

router.get('/user/:id', requireSignin, readController);
router.get('/user/order/:id', requireSignin, readOrderController);
router.post('/user/order/new/:id', writeOrderController)

module.exports = router;