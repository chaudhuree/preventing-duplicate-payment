const { transactionValidator }  = require('../middleware/transactionValidator');
const express = require('express');
const {transferMoney} = require('../controller/transferMoney');
const router = express.Router();

router.post('/transfer', transactionValidator, transferMoney);

module.exports = router;
