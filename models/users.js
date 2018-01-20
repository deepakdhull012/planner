var mongoose = require('mongoose');

//Users Schema

var userSchema = mongoose.Schema({
  email:{
    type:String,
    required: true
  },
  password:{
    type:String,
    required:true
  }

});

var Users = module.exports = mongoose.model('Users',userSchema);

//Get Users
module.exports.getUsers = function(callback,limit){
  Users.find(callback).limit(limit);
}

//Get User
module.exports.getUserByEmail = function(email,callback){
  Users.find({'email':email},callback);
}
//Add User
module.exports.addUser = function(user,callback){
  Users.create(user,callback);
}

//Login User
module.exports.loginUser = function(user,callback){
  Users.findOne({'email':user.email,'password':user.password},callback);
}

module.exports.deleteAllUsers = function(callback){

  Users.remove(callback);
}
