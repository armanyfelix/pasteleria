const mongoose = require('mongoose');

const pastelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  comboPrice: {
    type: Number,
    required: true,
  },
  toppingType: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
});

const Pastel = mongoose.model('Pastel', pastelSchema);

module.exports = Pastel;
