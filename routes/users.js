var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//console.log(db.collection('Users').find());
var login = new mongoose.Schema({
  fisrtname : String,
  lastname : String,
  Role : String,
  email : String,
  password: String
}, {collection: 'Users'});

var loginModel = mongoose.model('login', login);


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register',function(req, res){
    loginModel.find({email:req.body.email},function(err, data) {
      if(data.length > 0){
          res.send('user already existed');
      }else{
        var register = new loginModel({
            fisrtname : req.body.fisrtname,
            lastname : req.body.lastname,
            Role : req.body.Role,
            email : req.body.email,
            password: req.body.password
        });
          register.save(function (err, data) {
              if (err) {
                  console.log(">>>>err " + err);
              }
              res.send(data);
          });
      }
    });
});

router.post('/login',function(req, res){
    loginModel.find({email:req.body.email,password:req.body.password},function(err, data){
      if(err){

      }else{
        res.send(data);
      }
    });
});

module.exports = router;