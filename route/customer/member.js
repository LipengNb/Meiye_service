const express = require('express')
const app = express()
const mongoose = require('../../mode/db')
const memberModel = require('../../mode/customer/member')
const { insert, find, deletes, update } = require('../crud')
const route = express.Router()
// 会员列表
route.get('/admin/member/list', async (req, res) => {
  const result = await memberModel.find(req.query).populate('discount').populate('labels')
  res.send({
    code: 200,
    data: result,
    message: 'success'
  })
})
// 消费
route.post('/admin/member/cards', async (req, res) => {
  const body = req.body
  const memberId = body.memberId
  // 查询当前用户
  const member = await find(memberModel, { _id: memberId })
  // 折后的金额
  const sale = body.sale
  // 余额
  const balance = member[0].payment - sale
  const params = {
    ...body,
    balance: balance,
    _id: member[0].records.length
  }
  const records = member[0].records.concat(params)
  // 更新会员账户
  await update(memberModel, { _id: memberId }, { payment: balance, lastConsume: sale, records: records })
  res.send({
    code: 200,
    message: 'success'
  })
})
// 录入会员
route.post('/admin/member/insert', async(req, res) => {
  try{
    const result = await insert(memberModel, req.body)
    res.send({
      code: 200,
      message: 'success'
    })
  }catch (err) {
    res.send({
      code: 2101,
      message: err
    })
  }
})
// 会员资料修改
route.post('/admin/member/update', async(req, res) => {
  try{
    const result = await update(memberModel, { _id: req.body._id }, req.body)
    res.send({
      code: 200,
      message: 'success'
    })
  }catch (err) {
    res.send({
      code: 2101,
      message: err
    })
  }
})
// 删除会员
route.post('/admin/member/delete', async (req, res) => {
  const result = await deletes(memberModel, req.body)
  res.send({
    code: 200,
    data: result,
    message: 'success'
  })
})

module.exports = route