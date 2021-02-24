const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/MeiYe';

mongoose.connect(DB_URL, { useNewUrlParser: true,  useUnifiedTopology:true })

mongoose.connection.on('connected', () => {
  console.log('数据库链接成功')
})

mongoose.connection.on('disconnected', () => {
  console.log('数据库断开')
})

mongoose.connection.on('error', () => {
  console.log('数据库链接异常')
})

module.exports = mongoose