const mongoose = require('../db')

const Scheme = mongoose.Schema;


const planingScheme = new Scheme({
  name: {
    type: String,
    required: [true, '请填写活动名称']
  },
  desc: {
    type: String,
    required: [true, '请填写活动介绍']
  },
  price: {
    type: String,
    required: [true, '请填写活动售价']
  },
  count: {
    type: Number,
    required: [true, '请填写可用次数']
  },
  num: {
    type: Number,
    required: [true, '请填写活动限额']
  },
  term: {
    type: String,
    required: [true, '请填写活动期限']
  },
  create_time: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('planings', planingScheme)