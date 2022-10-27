// File Name: index.js
// Name: Christian Aduna
// Student ID: 301250889
// Date: October 4, 2022

var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index.controller');

/* GET home page. */
router.get('/', indexController.home);

// Renders the About Me page
router.get('/about', indexController.about);

// Renders the Projects page
router.get('/projects', indexController.projects);

// Renders the Services page
router.get('/services', indexController.services);

// Renders the Contact Me page
router.get('/contact', indexController.contact);

module.exports = router;
