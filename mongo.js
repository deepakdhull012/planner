var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var cors=require('cors');  //Cross origin requests

app.use(cors({origin:true,credentials: true}));

app.use(bodyParser.json());

Users = require('./models/users');
Subjects = require('./models/subjects');
Chapters = require('./models/chapters');
Topics = require('./models/topics');
Questions = require('./models/questions');
// Connect to Mongoose

mongoose.connect('mongodb://192.168.0.11/planner');

var db = mongoose.connection;
app.get('/', function(req,res){
	res.send('RServer Running');
});

app.get('/api/users',function(req,res){
Users.getUsers(function(err,users){
  if(err){
    throw err;
  }
  res.json(users);
});
});

app.get('/api/user/:email',function(req,res){
Users.getUserByEmail(req.params.email,function(err,user){
  if(err){
    res.json(err);
  }
  res.json(user);
});
});



app.post('/api/user',function(req,res){
  var user = req.body;
Users.addUser(user,function(err,user){

  if(err){
    res.json(err);
  }
  res.json(user);
});

});

app.post('/api/login',function(req,res){
  var user = req.body;
Users.loginUser(user,function(err,user){

  if(err){
    res.json(err);
  }
  res.json(user);
});
});

app.delete('/api/users',function(req,res){
	Users.deleteAllUsers(function(err,resp){

	  if(err){
	    res.json(err);
	  }
	  res.json(resp);
	});
});

app.get('/api/subjects',function(req,res){
Subjects.getSubjects(function(err,subjects){
  if(err){
    throw err;
  }
  res.json(subjects);
});
});

app.post('/api/subjects',function(req,res){
  var subject = req.body;
Subjects.addSubject(subject,function(err,subject){

  if(err){
    res.json(err);
  }
  res.json(subject);
});

});

app.delete('/api/subjects',function(req,res){
	Subjects.deleteAllSubjects(function(err,resp){

	  if(err){
	    res.json(err);
	  }
	  res.json(resp);
	});
});


app.get('/api/chapters/:subjectId',function(req,res){
Chapters.getChaptersBySubjectId(req.params.subjectId,function(err,chapters){
  if(err){
    throw err;
  }
  res.json(chapters);
});
});

app.post('/api/chapters',function(req,res){
  var chapter = req.body;
Chapters.addChapter(chapter,function(err,chapter){

  if(err){
    res.json(err);
  }
  res.json(chapter);
});

});

app.delete('/api/chapters/:subjectId',function(req,res){
	Chapters.deleteAllChaptersOfASubject(req.params.subjectId,function(err,resp){

	  if(err){
	    res.json(err);
	  }
	  res.json(resp);
	});
});

app.get('/api/topics/:chapterId',function(req,res){
Topics.getTopicsByChapterId(req.params.chapterId,function(err,topics){
  if(err){
    throw err;
  }
  res.json(topics);
});
});

app.post('/api/topics',function(req,res){
  var topic = req.body;
Topics.addTopic(topic,function(err,topic){

  if(err){
    res.json(err);
  }
  res.json(topic);
});

});

app.delete('/api/topics/:chapterId',function(req,res){
	Topics.deleteAllTopicsOfAChapter(req.params.chapterId,function(err,resp){

	  if(err){
	    res.json(err);
	  }
	  res.json(resp);
	});
});


app.get('/api/questions/:topicId',function(req,res){
Questions.getQuestionsByTopicId(req.params.topicId,function(err,questions){
  if(err){
    throw err;
  }
  res.json(questions);
});
});

app.post('/api/questions',function(req,res){
  var question = req.body;
Questions.addQuestion(question,function(err,question){

  if(err){
    res.json(err);
  }
  res.json(question);
});

});

app.delete('/api/questions/:topicId',function(req,res){
	Questions.deleteAllQuestionsOfATopic(req.params.topicId,function(err,resp){

	  if(err){
	    res.json(err);
	  }
	  res.json(resp);
	});
});





app.listen(3000);
console.log('running on 3000');
