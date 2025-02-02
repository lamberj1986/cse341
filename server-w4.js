const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('./db/connect-w4');
require('dotenv').config();

const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/', require('./routes/index-w4'));

mongodb.initDb((err) => {
  if (err) {
    console.error(err);
  } else {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
});