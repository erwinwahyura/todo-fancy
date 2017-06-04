var express = require('express')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/todo-fancy')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('connection success! lets go!!');
})
var index = require('./routes/index');

var app = express()

app.use('/', index)

app.listen(3000)

module.exports = app
