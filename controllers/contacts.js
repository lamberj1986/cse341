const Contact = require('../models/contact');

const reaganRoute = (req, res) => {
    res.send('Reagan Lambert');
};

const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({});
        res.json(contacts);
    } catch (err) {
        res.status(500).send(err);
    }
};

const getContact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        res.json(contact);
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = { 
    reaganRoute, 
    getContacts,
    getContact
};