// File Name: index.js
// Name: Christian Aduna
// Student ID: 301250889
// Date: October 4, 2022

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CAd X | Home' });
});

// Renders the About Me page
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'CAd X | About Me' });
});

// Renders the Projects page
router.get('/projects', function(req, res, next) {
  res.render('projectsservices', { title: 'CAd X | Projects' });
});

// Renders the Services page
router.get('/services', function(req, res, next) {
  res.render('projectsservices', { title: 'CAd X | Services' });
});

// Renders the Contact Me page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'CAd X | Contact Me' });
});

module.exports = router;
