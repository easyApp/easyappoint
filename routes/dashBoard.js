var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log('dashBoard modulle called');
  res.render('ChangeAppointment');
});

module.exports = router;
