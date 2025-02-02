const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts-w4'));

module.exports = router;
