const mongoose = require('../db')

const Scheme = mongoose.Schema;

const discountScheme = new Scheme({
  discount: {
    type: String,
    required: [true, '请填折扣']
  },
  price: {
    type: String,
    required: [true, '请填折扣金额']
  },
  isEnable: Number,
  create_time: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('discounts', discountScheme)