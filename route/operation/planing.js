const express = require('express')
const app = express()
const mongoose = require('../../mode/db')
const planingModel = require('../../mode/operation/planing')
const { insert, find, deletes, update } = require('../crud')
const route = express.Router()

route.get('/admin/planing/list', async (req, res) => {
  const result = await find(planingModel, req.query )
  res.send({
    code: 200,
    data: result,
    message: 'success'
  })
})

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

route.post('/admin/planing/update', async(req, res) => {
  try{
    const result = await update(planingModel, { _id: req.body._id }, req.body)
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

route.post('/admin/planing/delete', async (req, res) => {
  const result = await deletes(planingModel, req.body)
  res.send({
    code: 200,
    data: result,
    message: 'success'
  })
})

module.exports = route