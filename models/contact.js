const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    favoriteColor: { type: String },
    birthday: { type: Date }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;