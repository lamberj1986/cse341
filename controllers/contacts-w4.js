const getContacts = async (req, res) => {
    const db = require('../db/connect-w4').getDb();
    db.collection('contacts')
      .find()
      .toArray()
      .then((contacts) => res.status(200).json(contacts))
      .catch((err) => res.status(500).json({ message: 'Error retrieving contacts', error: err }));
  };
  
  const addContact = async (req, res) => {
    const db = require('../db/connect-w4').getDb();
    const newContact = req.body;
  
    db.collection('contacts')
      .insertOne(newContact)
      .then((result) => res.status(201).json(result))
      .catch((err) => res.status(500).json({ message: 'Error adding contact', error: err }));
  };
  
  module.exports = { getContacts, addContact };
  