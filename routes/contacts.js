const express = require('express');
const router = express.Router();
// const router = require('express').Router();
const contactsController = require('../controllers/contacts');

// Define routes
router.get('/', contactsController.getContacts);
router.get('/:id', contactsController.getContact);

// Export the routes
module.exports = router;