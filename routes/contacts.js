const router = require('express').Router();
const lesson1Controller = require('../controllers/contacts');

// Define routes
router.get('/', lesson1Controller.reaganRoute);

// Export the routes
module.exports = router;