const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const geturl=require('url')
const app = express()
//const mongoose = require('mongodb').MongoClient; 

var transporter = nodemailer.createTransport({
	service: 'gmail',
	secure:false,
	port:25,
	auth: {
	  user: 'devendraraiyani2852000@gmail.com',
	  pass: 'Devendra@285'
	}
  });

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/rythm',{
	useNewUrlParser: true,
	useUnifiedTopology: true
  }); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
	console.log("connection succeeded"); 
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ 
	extended: true
}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/searchsong',(req,res)=>{
  var url_parts = geturl.parse(req.url, true);
  var query = url_parts.query;
  var ssong='/'+query.ssong+'/';
  console.log(ssong);
  var data={"name":{$regex:ssong,$options:"si"}}
  db.collection('users').find(data).toArray(function(err, result){ 
		
		if (err) throw err;
				console.log(result);
	});
});


app.get('/loadRecentSongs',(req,res)=>{
  MongoClient.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("rythm");
    //Find the first document in the customers collection:
    dbo.collection("songs").find({}).sort({$natural:-1}).limit(20).toArray( function(err, result) {
      if (err) throw err;
      //console.log("catagories ok");
      //console.log("res"+result);
      res.json(result);
      
    });
});
})
app.get('/loadcategorysongs',(req,res)=>{
  var response;
  var url_parts = geturl.parse(req.url, true);
  var pname = url_parts.query.pname;
  var data={"catagory":pname}

  db.collection('songs').find(data).toArray(function(err, result){ 
    
    
    if (err) throw err;
    //console.log("res"+result);
    res.json(result);
    // var selectedIds=result[0].songs;
    // console.log(selectedIds);

  
//     db.collection('songs').find().toArray(function(err, result1){ 
//       if (err) throw err;
//           var songsObj=[];
//           selectedIds.forEach(element => {
//             result1.forEach(elements => {
//                 if(elements._id==element)
//                   songsObj.push(elements);
                  
//             });
//           });
// //          console.log(songsObj);
//           res.json(songsObj);
//         });
	});

})

app.get('/loadsongs',(req,res)=>{
  var response;
  var url_parts = geturl.parse(req.url, true);
  var pname = url_parts.query.pname;
  var data={"name":pname}

  db.collection('playlists').find(data).toArray(function(err, result){ 
		
    if (err) throw err;
    var selectedIds=result[0].songs;
    //console.log(selectedIds);

  
    db.collection('songs').find().toArray(function(err, result1){ 
      if (err) throw err;
          var songsObj=[];
          selectedIds.forEach(element => {
            result1.forEach(elements => {
                if(elements._id==element)
                  songsObj.push(elements);
                  
            });
          });
//          console.log(songsObj);
          res.json(songsObj);
        });
	});



 /* MongoClient.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("rythm");
    //Find the first document in the customers collection:
    dbo.collection('playlists').aggregate([
      { $lookup:
        {
          from: 'songs',
          localField: 'songs',
          foreignField: '_id',
          as: 'plsongs'
        }
      }
    ]).toArray(function(err, result) {
      if (err) throw err;
     response=result;
     console.log(response);     
     res.json(response);
    db.close();
    });

});*/  
})

app.get('/login',(req,res)=>{
  var url_parts = geturl.parse(req.url, true);
  var query = url_parts.query;
  var unm=query.uname;
  var pass=query.pass;
  var data = { 
		"email": unm, 
		"password":pass
	} 

	db.collection('users').find(data).toArray(function(err, result){ 
		
		if (err) throw err;
				res.json(result);
	});
});

app.get('/signup',(req,res)=>{
  var url_parts = geturl.parse(req.url, true);
  var query = url_parts.query;
  var unm=query.uname;
  var uemail=query.uemail;
  var pass=query.pass;
  var data = { 
		"name":unm,
		"email": uemail, 
		"password":pass
	} 
	
	var data1 = { 
		"email": uemail 
	}
	db.collection('users').insertOne(data,function(err, result){ 
		if (err) throw err;  
	  	res.json(result.result);
	});			
});

app.get('/checkac',(req,res)=>{
  var url_parts = geturl.parse(req.url, true);
  var query = url_parts.query;
  var unm=query.umail; 
	
	var data1 = { 
		"email": unm 
	} 
	db.collection('users').find(data1).toArray(function(err, result){ 
		
		if (err) throw err;
		if(result.length!=0){
			res.json("{n:1,ok:1}");
		}
		else{
			res.json("")		
		}
	});
});

app.get('/forgotmail',(req,res)=>{
  var url_parts = geturl.parse(req.url, true);
  var query = url_parts.query;
  var unm=query.umail; 
	
	var data1 = { 
		"email": unm 
	} 
	db.collection('users').find(data1).toArray(function(err, result){ 
		
		if (err) throw err;
		
		if(result.length!=0){
			res.json("{n:0,ok:0}");
		}
		else{
			res.json("")		
		}
	});
});

app.get('/changepass',(req,res)=>{
  var url_parts = geturl.parse(req.url, true);
  var query = url_parts.query;
  var unm=query.pass;
  var umail=query.mail;
	var myquery = { email: umail };
	var newvalues = { $set: {password: unm} };
	db.collection("users").updateOne(myquery, newvalues, function(err, res) {
	  if (err) throw err;
	  else res.json("{n:1,ok:1}");
	});
	
});

app.get('/otp',(req,res)=>{
	var url_parts = geturl.parse(req.url, true);
	var query = url_parts.query;
  var otp=Math.floor(Math.random() * 10000);
  //console.log(query.forwhat);
  if(query.forwhat=="forgot")
  {
    var mailOptions = {
      from: 'devendraraiyani2852000@gmail.com',
      to: query.umail,
      subject: 'OTP to change password in rythm account',
      html: '<h1>Welcome '+query.umail+',</h1><p><b>OTP is '+otp+'</b> to change your rythm account password.Please do not share it with anyone.</p><br><p>Thank you for choosing us as your primary entertainer.</p><br><p>Best Regards,rythm team</p>'
    };   
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email for forgot is sent: ' + info.response);
      }
      }); 
      res.json(otp);
  }
  if(query.forwhat=="sign")
  {
    var mailOptions = {
      from: 'devendraraiyani2852000@gmail.com',
      to: query.umail,
      subject: 'OTP to sign up in rythm account',
      html: '<h1>Welcome '+query.umail+',</h1><p><b>OTP is '+otp+'</b> to varify your email for rythm account.Please do not share it with anyone.</p><br><p>Thank you for choosing us as your primary entertainer.</p><br><p>Best Regards,rythm team</p>'
      };   
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email for signup is sent: ' + info.response);
      }
      }); 
      res.json(otp);
  }
	
});

app.get('/loadplaylist',(req,res)=>{
  MongoClient.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("rythm");
    //Find the first document in the customers collection:
    dbo.collection("playlists").find({}).toArray( function(err, result) {
      if (err) throw err;
      console.log("loadplaylists ok");
      res.json(result);
      db.close();
    });
});
})

app.get('/remove',(req,res)=>{
	var url_parts = geturl.parse(req.url, true);
	var query = url_parts.query;
	var uid=query.uname;
	var song=query.song;
	var data = { 
		  "user": uid, 
		  "song":song
	  } 
	  
	db.collection('myfavourite').deleteOne(data,function(err, result){ 
		if (err) throw err;
		res.json(result.result);
	});	  
});

app.get('/loadCata',(req,res)=>{
  MongoClient.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("rythm");
    //Find the first document in the customers collection:
    dbo.collection("Catagories").find({}).toArray( function(err, result) {
      if (err) throw err;
      //console.log("catagories ok");
      res.json(result);
      db.close();
    });
});
})

app.get('/loadMyFavouriteSongs',(req,res)=>{
	var url_parts = geturl.parse(req.url, true);
  	var query = url_parts.query;
    var uid=query.uname;


	  MongoClient.connect(url,{
		useNewUrlParser: true,
		useUnifiedTopology: true
		}, function(err, db) {
		if (err) throw err;
		var dbo = db.db("rythm");
		//Find the first document in the customers collection:
		dbo.collection("myfavourite").aggregate([
			{ $lookup:
			  {
				from: 'songs',
				localField: 'song',
				foreignField: 'name',
				as: 'flsongs'
			  }
			},
			{
				"$match": {
					"user": uid
				}
			}
		  ]).toArray( function(err, result) {
      if (err) throw err;
     // console.log(result);
		  console.log("my favourite list : "+uid+" : ok");
		  res.json(result);
		  db.close();
		});
	});  
  });

  app.get('/like',(req,res)=>{
    var url_parts = geturl.parse(req.url, true);
    var query = url_parts.query;
    var uid=query.uname;
    var song=query.song;
    var data = { 
      "user": uid, 
      "song":song
    } 
    
    db.collection('myfavourite').find(data).toArray(function(err, result){ 
      
      if (err) throw err;
      
      if(result.length!=0){
            db.collection('myfavourite').deleteOne(data,function(err, result){ 
          if (err) throw err;
        });
        res.json("{n:0,ok:0}");
      }
      else{
        db.collection('myfavourite').insertOne(data,function(err, result){ 
          if (err) throw err;  
          res.json(result.result);
        });			
      }
    });
  });

app.listen(3000,'localhost',function(){
	console.log("server listening at port 3000");
})