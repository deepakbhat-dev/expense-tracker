const hostname = 'localhost';
const port = process.env.PORT || 4000;
const dbInstance = 'mongodb://localhost:27017/expensetracker';
const baseUri = '/api/v1';

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const transactionRoutes = require('./src/Routes/transactions');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(baseUri + '/transactions', transactionRoutes);

mongoose.connect(dbInstance, {useNewUrlParser: true, useUnifiedTopology: true}, function(err) {
    if (err) {
      console.log('Database Connection Failed:' + err);
      return;
    }
    console.log('<- Database Connection Succeeded ->\n');
});

app.listen(port, hostname, () => {
  console.log('Server running on http://%s:%d/', hostname, port);
  console.log('---------------------------------------------------------->\n');
});
