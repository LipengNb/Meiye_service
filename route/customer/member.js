const express = require('express')
const app = express()
const mongoose = require('../../mode/db')
const memberModel = require('../../mode/customer/member')
const { insert, find, deletes, update } = require('../crud')
const route = express.Router()

route.get('/admin/member/list', async (req, res) => {
  const result = await find(memberModel)
  res.send({
    code: 200,
    data: result,
    message: 'success'
  })
})

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

route.post('/admin/member/delete', async (req, res) => {
  const result = await deletes(memberModel, req.body)
  res.send({
    code: 200,
    data: result,
    message: 'success'
  })
})

module.exports = route