module.exports = (app) => {
  // --------------- 客户管理 ---------------
  // 会员列表
  app.get('/admin/member/:reset', require('./customer/member')),
  app.post('/admin/member/:reset', require('./customer/member')),
  // --------------- 活动策划 ---------------
  // 活动套装
  app.get('/admin/planing/:reset', require('./operation/planing')),
  app.post('/admin/planing/:reset', require('./operation/planing')),
  // 标签管理
  app.get('/admin/label/:reset', require('./operation/label')),
  app.post('/admin/label/:reset', require('./operation/label')),
  // 折扣管理
  app.get('/admin/discount/:reset', require('./operation/discount')),
  app.post('/admin/discount/:reset', require('./operation/discount')),
  // --------------- 系统管理 ---------------
  app.get('/admin/staff/:reset', require('./system/staff')),
  app.post('/admin/staff/:reset', require('./system/staff'))

}