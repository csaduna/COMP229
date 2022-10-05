// File Name: users.js
// Name: Christian Aduna
// Student ID: 301250889
// Date: October 4, 2022

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
