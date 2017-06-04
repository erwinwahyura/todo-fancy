var mongoose = require('mongoose')
var Schema = mongoose.Schema

var todoSchema = new Schema ({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true,
  },
  createdby: {
    type: String,
    required: true
  }
})

var todo = mongoose.model('Todos', todoSchema)

module.exports = todo
