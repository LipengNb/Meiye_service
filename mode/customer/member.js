const mongoose = require('../db')

const Scheme = mongoose.Schema;

const memberScheme = new Scheme({
  cardId: {
    type: String,
    required: [true, '请选择折扣'],
  },
  name: {
    type: String,
    require: [true, '请填写会员姓名']
  },
  gender: String,
  phone: String,
  birthday: String,
  discount: {
    required: [true, '请选择折扣'],
    type: mongoose.SchemaTypes.ObjectId, ref: 'discounts'
  },
  payment: String,
  labels: {
    type: mongoose.SchemaTypes.Array, ref: 'labels'
  },
  planing: {
    type: mongoose.SchemaTypes.Array, ref: 'planings'
  },
  records: {
    type: mongoose.SchemaTypes.Array, ref: 'records'
  },
  remark: String,
  create_time: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('members', memberScheme)