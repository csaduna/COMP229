// File Name: list.router.js
// Name: Christian Aduna
// Student ID: 301250889
// Date: October 26, 2022

var express = require('express');
var router = express.Router();
let listController = require('../controllers/list.controller');

/* GET users listing. */
router.get('/list', listController.businessContacts);

module.exports = router;