const mongoose = require('../db')

const Scheme = mongoose.Schema;


const labelScheme = new Scheme({
  name: {
    type: String,
    required: [true, '请填写活动名称']
  },
  desc: {
    type: String,
    required: [true, '请填写活动介绍']
  },
  isEnable: Number,
  create_time: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('labels', labelScheme)