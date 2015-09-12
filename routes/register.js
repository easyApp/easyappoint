var express = require('express');
var router = express.Router();
/* login user. */
router.get('/', function(req, res, next) {
    res.render('CreateAccount', { title: 'Express' });
  //res.send('register module called');
});


module.exports = router;
