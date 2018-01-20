var mongoose = require('mongoose');

//Users Schema

var chapterSchema = mongoose.Schema({
  subjectId:{
    type:String,
    required: true
  },
  chapterName:{
    type:String,
    required: true
  }

});

var Chapters = module.exports = mongoose.model('Chapters',chapterSchema);

//Get Users
module.exports.getChaptersBySubjectId = function(subjectId,callback){
  Chapters.find({'subjectId':subjectId},callback);
}

//Add User
module.exports.addChapter = function(chapter,callback){
  Chapters.create(chapter,callback);
}


module.exports.deleteAllChaptersOfASubject = function(subjectId,callback){

  Chapters.remove({'subjectId':subjectId},callback);
}
