const mongoose = require('../db')

const Scheme = mongoose.Schema;


const planingScheme = new Scheme({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    required: true
  },
  num: {
    type: Number,
    required: true
  },
  term: {
    type: String,
    required: true
  },
  create_time: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('planings', planingScheme)