var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  console.log('call contact');
    res.render('ContactUs', { title: 'Express' });
});

module.exports = router;
