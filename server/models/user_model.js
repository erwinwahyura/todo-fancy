var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema ({
  id: String,
  name: String,
  email: String,
  createdDate: {
    type: Date,
    default: Date.now()
  },
  updatedDate: {
    type: Date,
    default: Date.now()
  },
  role: {
    type: String,
    default: 'user'
  }
})

var user = mongoose.model('Users', userSchema)

module.exports = user
