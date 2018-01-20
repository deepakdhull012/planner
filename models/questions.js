var mongoose = require('mongoose');

//Users Schema

var questionSchema = mongoose.Schema({
  topicId:{
    type:String,
    required: true
  },
  questionName:{
    type:String,
    required: true
  },
  optionA:{
    type:String,
    required:true
  },
  optionB:{
    type:String,
    required:true
  },
  optionC:{
    type:String,
    required:true
  },
  optionD:{
    type:String,
    required:true
  },
  correctAnswer:{
    type:Number,
    required:true
  },
  explanation:{
    type:String,
    required:false
  },
  year:{
    type:Number,
    required:false
  },
  difficulty:{
    type:String,
    required:false
  }

});

var Questions = module.exports = mongoose.model('Questions',questionSchema);

//Get Users
module.exports.getQuestionsByTopicId = function(topicId,callback){
  Questions.find({'topicId':topicId},callback);
}

//Add User
module.exports.addTopic = function(question,callback){
  Questions.create(question,callback);
}


module.exports.deleteAllQuestionsOfATopic = function(topicId,callback){

  Questions.remove({'topicId':topicId},callback);
}
