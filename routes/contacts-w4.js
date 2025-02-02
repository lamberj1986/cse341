const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts-w4');

router.get('/', contactsController.getContacts);
router.post('/', contactsController.addContact);

module.exports = router;