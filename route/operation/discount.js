const express = require('express')
const app = express()
const mongoose = require('../../mode/db')
const discountModel = require('../../mode/operation/discount')
const { insert, find, deletes, update } = require('../crud')
const route = express.Router()

route.get('/admin/discount/list', async (req, res) => {
  const result = await find(discountModel)
  res.send({
    code: 200,
    data: result,
    message: 'success'
  })
})

route.post('/admin/discount/insert', async(req, res) => {
  try{
    const result = await insert(discountModel, req.body)
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

route.post('/admin/discount/update', async(req, res) => {
  try{
    const result = await update(discountModel, { _id: req.body._id }, req.body)
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

route.post('/admin/discount/delete', async (req, res) => {
  const result = await deletes(discountModel, req.body)
  res.send({
    code: 200,
    data: result,
    message: 'success'
  })
})

module.exports = route