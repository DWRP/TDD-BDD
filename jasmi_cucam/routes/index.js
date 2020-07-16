var express = require('express');
var Client = require('../spec/helpers/Client');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TDD Base', clients: Client.all() });
});

module.exports = router;
