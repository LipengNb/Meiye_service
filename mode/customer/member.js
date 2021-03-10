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
  lastConsume: String,
  payment: String,
  labels: [
    {
      type: mongoose.SchemaTypes.ObjectId, ref: 'labels'
    }
  ],
  planing: {
    type: mongoose.SchemaTypes.Array, ref: 'planings'
  },
  records: [
    {
      _id: Number,
      memberId: {
        type: String,
        required: [true, '会员ID']
      },
      orig: {
        type: String,
        required: [true, '原价']
      },
      sale: {
        type: String,
        required: [true, '折后金额']
      },
      balance: {
        type: String,
        required: [true, '余额']
      },
      product: {
        type: String,
        required: [true, '项目']
      },
      staff: {
        type: String,
        required: [true, '职员']
      },
      remarks: String,
      create_time: {
        type: Date,
        default: Date.now()
      }
    }
  ],
  remark: String,
  create_time: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('members', memberScheme)