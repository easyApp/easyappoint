var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  console.log('call profile');
    res.render('profile', { title: 'Express' });
});

module.exports = router;
