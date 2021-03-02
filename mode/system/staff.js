const mongoose = require('../db')

const Scheme = mongoose.Schema;

const staffScheme = new Scheme({
  name: {
    type: String,
    required: [true, '请填写员工姓名']
  },
  gender: {
    type: String,
    required: [true, '请填写折扣金额']
  },
  job: {
    type: String,
    required: [true, '请选择职业']
  },
  level: {
    type: String,
    required: [true, '请选择级别']
  },
  skill: {
    type: Array,
    required: [true, '请选择筛查技能']
  },
  birthday: String,
  phone: {
    type: String,
    required: [true, '请填写手机号码']
  },
  province: Array,
  concat: {
    type: String,
    required: [true, '请填写紧急联系人']
  },
  relationship: String,
  working_years: {
    type: String,
    required: [true, '请填写工作年限']
  },
  isYears: String,
  idCard: {
    type: String,
    required: [true, '请填写身份证号码']
  },
  create_time: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('staffs', staffScheme)