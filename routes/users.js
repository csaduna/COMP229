// Student ID: 301250889
// Name: Christian Aduna
// Date: October 8, 2022

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
