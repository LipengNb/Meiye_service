const express = require('express')
const app = express()
const mongoose = require('../../mode/db')
const labelModel = require('../../mode/operation/label')
const { insert, find, deletes, update } = require('../crud')
const route = express.Router()

route.get('/admin/label/list', async (req, res) => {
  console.log(req.query)
  const result = await find(labelModel, req.query )
  res.send({
    code: 200,
    data: result,
    message: 'success'
  })
})

route.post('/admin/label/insert', async(req, res) => {
  try{
    const result = await insert(labelModel, req.body)
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

route.post('/admin/label/update', async(req, res) => {
  try{
    const result = await update(labelModel, { _id: req.body._id }, req.body)
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

route.post('/admin/label/delete', async (req, res) => {
  const result = await deletes(labelModel, req.body)
  res.send({
    code: 200,
    data: result,
    message: 'success'
  })
})

module.exports = route