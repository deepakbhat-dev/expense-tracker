const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
  firstUser: {
    type: String,
    required: true
  },
  action: {
    type: String,
    required: true,
    enum: ['Credit', 'Debit'],
    default: 'Debit'
  },
  amount: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  modeOfPayment: {
    type: String,
    required: true,
    enum: ['Cash', 'Card', 'PhonePe', 'Paytm', 'GooglePay'],
    default: 'PhonePe'
  },
  secondUser: {
    type: String,
    required: false
  },
  repeatFlag: {
    type: Boolean,
    default: false
  },
  remainingBalance: {
    type: String,
    required: true
  }
}, { timestamps: true });

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  bankBalance: {
    type: String,
    required: true
  },
  transactions: [transactionSchema]
});

module.exports = mongoose.model('User', userSchema);
