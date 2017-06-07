var express = require('express')
var router = express.Router()
//controllers
var todo_controller = require('../controllers/todo_controller')

router.get('/', function(req, res ) {
  res.send({title: 'Welcome this is Express'})
})

//routing here
router.get('/api/todos', todo_controller.getAll)
router.get('/api/todos/:_id', todo_controller.getById)
router.post('/api/todos', todo_controller.create)
router.put('/api/todos/:_id', todo_controller.updates)
router.delete('/api/todos/:_id', todo_controller.remove)



module.exports = router
