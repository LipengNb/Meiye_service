const express = require('express')
const app = express()
const mongoose = require('../../mode/db')
const memberModel = require('../../mode/customer/member')
const { insert, find, deletes, update } = require('../crud')
const route = express.Router()
// 会员列表
route.get('/admin/member/list', async (req, res) => {
  const result = await memberModel.find().populate('discount').populate('labels')
  res.send({
    code: 200,
    data: result,
    message: 'success'
  })
})
// 消费
route.post('/admin/member/cards', async (req, res) => {
  const body = req.body
  const _id = body._id
  const member = await find(memberModel, { _id: _id })
  const dis = body.lastConsume
  await update(memberModel, { _id: _id }, { payment: member[0].payment - dis, lastConsume: dis, records:  member[0].records.concat([body]) })  
  res.send({
    code: 200,
    data: result,
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