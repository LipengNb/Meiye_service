module.exports = (app) => {
  // 活动策划
  app.get('/admin/planing/:reset', require('./planing')),
  app.post('/admin/planing/:reset', require('./planing'))
}