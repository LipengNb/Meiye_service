module.exports = {
  insert(collectionName, insertData) {
    return new Promise((resolve, reject) => {
      collectionName.insertMany(insertData, error => {
        if (error) {
          const err = error.errors
          for (let attr in err) {
            reject(err[attr]['message'])
          }
        }
        resolve()
      })
    })
  },
  delete(collectionName, deleteData, deleteType = 'deleteOne') {
    return new Promise((resolve, reject) => {
      collectionName[deleteType](deleteData, (err) => {
        if (err) throw err
        resolve()
      })
    })
  },
  update(collectionName, whereObj, updateObj, updateType = 'updateOne') {
    return new Promise((resolve, reject) => {
      collectionName[updateType](whereObj, updateObj, err => {
        if (err) throw err
        resolve()
      })
    })
  },
  find (collectionName, whereObj, showObj) {
    return new Promise((resolve, reject) => {
      collectionName.find(whereObj, showObj).exec((err, data) => {
        if (err) throw err;
        resolve(data)
      })
    })
  },
  paging (collectionName, whereObj, showObj, limitNum, pageCode) {
    return new Promise((resolve, reject) => {
      // limit(limitNum) 每页显示个数
      // skip(limitNum * pageCode) // 每页从哪一个开始
      collectionName.find(whereObj, showObj).limit(limitNum).skip(limitNum * pageCode).exec((err, data) => {
        if (err) throw err
        resolve(data)
      })
    })
  },
  distinct(collectionName, name) {
    return new Promise((resolve, reject) => {
      collectionName.distinct(name).exec((err, data) => {
        if (err) throw err;
        resolve(data)
      })
    })
  }
}