const express = require('express')
const app = express()
const staffModel = require('../../mode/system/staff')
const { insert, find, deletes, update } = require('../crud')
const route = express.Router()

route.get('/admin/staff/list', async (req, res) => {
  const result = await find(staffModel, req.query )
  res.send({
    code: 200,
    data: result,
    message: 'success'
  })
})

route.post('/admin/staff/insert', async(req, res) => {
  try{
    const result = await insert(staffModel, req.body)
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

route.post('/admin/staff/update', async(req, res) => {
  try{
    const result = await update(staffModel, { _id: req.body._id }, req.body)
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

route.post('/admin/staff/delete', async (req, res) => {
  const result = await deletes(staffModel, req.body)
  res.send({
    code: 200,
    data: result,
    message: 'success'
  })
})

module.exports = route