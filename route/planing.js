const express = require('express')
const app = express()
const mongoose = require('../mode/db')
const planingModel = require('../mode/operation/planing')
const { insert, find, deletes } = require('./crud')
const route = express.Router()

route.post('/admin/planing/insert', async(req, res) => {
  try{
    const result = await insert(planingModel, req.body)
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

route.get('/admin/planing/list', async (req, res) => {
  const result = await find(planingModel)
  res.send({
    code: 200,
    data: result,
    message: 'success'
  })
})

route.post('/admin/planing/delete', async (req, res) => {
  const result = await deletes(planingModel, req.body)
  res.send({
    code: 200,
    data: result,
    message: 'success'
  })
})


module.exports = route