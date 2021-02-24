const mongoose = require('./db')

const Scheme = mongoose.Schema;


const memberScheme = new Scheme({

})

module.exports = db.model('members', memberScheme)