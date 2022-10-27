// File Name: list.router.js
// Name: Christian Aduna
// Student ID: 301250889
// Date: October 26, 2022

var express = require('express');
var router = express.Router();
let listController = require('../controllers/list.controller');

/* GET list of items */
router.get('/list', listController.businessContacts);

// Routers for edit
router.get('/edit/:id', listController.displayEditPage);
router.post('/edit/:id', listController.processEditPage);

// Delete
router.get('/delete/:id', requireAuth, listController.performDelete);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, listController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, listController.processAddPage);

module.exports = router;