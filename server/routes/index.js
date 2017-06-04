var express = require('express')
var router = express.Router()
//controllers

router.get('/', function(req, res ) {
  res.send({title: 'Welcome this is Express'})
})

//routing here



module.exports = router
