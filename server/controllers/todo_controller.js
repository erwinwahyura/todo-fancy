var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
const todo_model = require('../models/todo_model')

//check with postman done
var create = function(req, res) {
  todo_model.create(req.body, function(err, todo) {
    if(!err) res.send('todo has been added \n'+ todo)
    else res.send(err.message)
  })
}
//check with postman done
var getAll = function(req, res) {
  todo_model.find({}, function(err, todo) {
    if (!err) res.send(`list of todos: \n\n ${todo}\n`)
    else res.send(err.message)
  })
}
//done
var getById = function(req, res) {
  let _id = req.params._id
  todo_model.findById(_id, function(err, todo) {
    console.log(todo);
    if(!err) res.send(`your todo list: \n `+todo)
    else res.send(err.message)
  })
}
//done
var remove = function(req, res) {
  let _id = req.params._id
  console.log(_id);
  let query = {_id:_id}
  console.log('==============='+query)
  todo_model.remove(query, function(err, todo) {
    if(!err) res.send(`${todo}\n todo deleted!`)
    else res.send(err.message)
  })
}
//done
var updates = function(req, res) {
  let id = req.params._id

  todo_model.findOneAndUpdate({_id:id},{ $set: {title: req.body.title,body: req.body.body,createdby: req.body.createdby}}, function(err, todo) {
    if(!err) res.send(`this todo: ${todo} \n has been edited! go findById to check it!`)
    else res.send(err.message)
  })
}

module.exports = {
  create, getAll, getById, remove, updates
}
