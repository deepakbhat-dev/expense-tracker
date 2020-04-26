const express = require('express');
const transactionsRouter = express.Router();
const userModel = require('../Database/Models/expenseTracker');

transactionsRouter.get('/', function(req, res) {
  console.log('<--- Request received to get all transactions --->\n');
  res.send();
});

transactionsRouter.post('/', async function(req, res) {
  console.log('<--- Request received to post a transaction --->\n');
  // const user = new userModel({
  //   username: req.body.username,
  //   company: req.body.username,
  //   bankBalance: req.body.bankBalance
  // });
  // try {
  //   const savedInfo = await user.save();
  //   console.log(savedInfo);
  //   res.json( {message: 'Success', details: savedInfo[0]} );
  // } catch(err) {
  //   console.log('Transaction entry failed: ', err);
  //   res.json( {message: 'Fail'} );
  // }
});

module.exports = transactionsRouter;
