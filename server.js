require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})

const express = require('express');
const app = express();

app.use(express.json());
app.use('/contacts', require('./routes/contacts'));

app.listen(process.env.PORT);
console.log('Web Server is listening at port ' + (process.env.PORT));