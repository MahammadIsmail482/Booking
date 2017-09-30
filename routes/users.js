var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var adminLogin = new mongoose.Schema({
  fisrtname : String,
  lastname : String,
  Role : String,
  email : String,
  password: String
}, {collection: 'Users'});

var adminLoginModel = mongoose.model('adminLogin', adminLogin);


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register',function(req, res){
  var userDetails = new adminLoginModel(req.body);
  userDetails.save(function(err, data){
    if(err){
      console.log(">>>>err " + err );
    }
    res.send(data)
  });
});

router.get('/login',function(req, res){
  adminLoginModel.find({email:req.body.email,Password:req.body.password}, function(err, data){
    console.log(">>>>" + data );
  });
});

module.exports = router;
