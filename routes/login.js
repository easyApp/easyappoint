var express = require('express');
var router = express.Router();
var jwt = require('jwt-simple');
var token;
var Patient = require('../public/javascripts/Patient');
/* login user. */
router.get('/', function(req, res, next) {
  console.log('modulle called not sure');
  var newT = new Patient();
  res.send('login module called');
});

router.post('/', function(req, res, next){
  console.log(req.body);
  var userName = req.body.userName;
  var psswd = req.body.psswd;
  var pat = new Patient();
  pat.setFirstName(userName);
  pat.setLastName(psswd);

  var expires = '201509101010';
  token = jwt.encode({
    iss: 'testme',
    exp: '1',
  },"Prashil");
  res.set({
    'Content-Type' : 'application/json',
  });
  res.json({
      success : true,
      message: pat.getName(),
      token: token,
      nextScreen : 'dashBoard'
  });

});

module.exports = router;
