var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('loginScreen', { title: 'Express' });
});

router.get('/header', function(req, res, next) {
  res.render('header', { title: 'Express' });
});

router.get('/footer', function(req, res, next) {
  res.render('footer', { title: 'Express' });
});

module.exports = router;
