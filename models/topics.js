var mongoose = require('mongoose');

//Users Schema

var topicSchema = mongoose.Schema({
  chapterId:{
    type:String,
    required: true
  },
  topicName:{
    type:String,
    required: true
  }

});

var Topics = module.exports = mongoose.model('Topics',topicSchema);

//Get Users
module.exports.getTopicsByChapterId = function(chapterId,callback){
  Topics.find({'chapterId':chapterId},callback);
}

//Add User
module.exports.addTopic = function(topic,callback){
  Topics.create(topic,callback);
}


module.exports.deleteAllTopicsOfAChapter = function(chapterId,callback){

  Topics.remove({'chapterId':chapterId},callback);
}
