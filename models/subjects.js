var mongoose = require('mongoose');

//Users Schema

var subjectSchema = mongoose.Schema({
  subjectName:{
    type:String,
    required: true
  }

});

var Subjects = module.exports = mongoose.model('Subjects',subjectSchema);

//Get Users
module.exports.getSubjects = function(callback,limit){
  Subjects.find(callback).limit(limit);
}

//Add User
module.exports.addSubject = function(subject,callback){
  Subjects.create(subject,callback);
}


module.exports.deleteAllSubjects = function(callback){

  Subjects.remove(callback);
}
