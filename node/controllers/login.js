var models = require('./../models');
var login = {};

/*
function: login.get_user
input: user_id
output: user details or error message
description: read user by id
*/
login.get_user = function(req, res) {
  models.vishal.findAll({
    where: {id: req.params.user_id}
  }).then(function(data) {
    res.send(data[0].dataValues);
  }).catch(function(err) {
    res.send("Error: " + err.message);
  });
};

/*
function: login.create_user
input: username, password, email, profile_pic
output: success message with user_id or error message
description: create user by inserting user fields in database, only if username is unique
*/
login.create_user = function(req, res){
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email)) {
    models.vishal.create(req.body).then(function(data) {
      var response_body = {};
      response_body.user_id = data.dataValues.id;
      response_body.message = "User Created Successfully";
      res.send(response_body);
    }).catch(function(err) {
      res.send("Error: " + err.message);
    });
  }
  else{
    res.send("Invalid Email Address");
  }  
};

/*
function: login.delete_user
input: user_id
output: success or error message
description: delete user by id
*/
login.delete_user = function(req, res){  
  models.vishal.destroy({
    where: {id: req.params.user_id}
  }).then(function(data) {
    res.send("User Deleted Successfully");
  }).catch(function(err) {
    res.send("Error: " + err.message);
  });
};

/*
function: login.edit_user
input: user_id(compulsary), username, password, email, profile_pic
output: success or error message
description: update requested fields by id
*/
login.edit_user = function(req, res){
  if(req.body.email){
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email))) {
      res.send("Invalid Email Address");
    }
  }
  else if(req.body.user_id){
    models.vishal.update(req.body, {
      where: {id: req.body.user_id}
    }).then(function(data) {
      res.send("User updated Successfully");
    }).catch(function(err) {
      res.send("Error: " + err.message);
    });
  }
  else{
    res.send("Please give id of the user to update");
  }
};
module.exports = login;