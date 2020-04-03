const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const geturl=require('url')
var fs = require('fs');

var multer = require('multer');
const fileUpload = require('express-fileupload');





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
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4201');
    //res.setHeader('Access-Control-Allow-Origin', ['*']);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const DIR = '../../rythm/src/assets/songs/';
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname;  //.toLowerCase().split(' ').join('-');
    cb(null, fileName)
  }
})


var upload = multer({
  storage: storage,
//   limits: {
//     fileSize: 1024 * 1024 * 5
//   },
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "audio/mpeg" || file.mimetype == "audio/mp3" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .pm3, .png, .jpg and .jpeg format allowed!'));
    }
  }
})


app.post('/song/addaudio',upload.single('Song'),function(req,res){
  //console.log(req.file.photo.name);
  //console.log(req.body);
  var newItem = new Item(req.body);
  //console.log(newItem);
  //newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
  // newItem.name=req.files.userPhoto.name;
  // newItem.img.name=req.files.userPhoto.name;
  // newItem.img.data=req.files.userPhoto.data;
  // newItem.img.contentType = 'image/png';
  
  newItem.save(function(err) {
  if (err) {
    res.status(400);
    res.send("Unable to add song");
  }
  else {
  
    res.status(200);
    console.log("Song added!");
    console.log(newItem);
    res.json({ "message": "Song record saved successfully"});
  }
  });
  //res.send("ok");
  });


app.get('/adminlogin',(req,res)=>{
  var url_parts = geturl.parse(req.url, true);
  var query = url_parts.query;
  var unm=query.uname;
  var pass=query.pass;
  var data = { 
        "UserName":unm, 
        "Password":pass
    } 

    db.collection('AdminUsers').find(data).toArray(function(err, result){ 
        
        if (err) throw err;
                res.json(result);
    });
});

app.post('/song/add',(req,res) =>{
  let data =req.body;
  console.log()
  db.collection('songs').insertOne(data,function(err, result){ 
    if (err) throw err;  
      db.collection('songs').find(data).toArray(function(err,result){
        if(err) throw err;
        res.json(result);
      });
  });
});

app.get('/checkCatagory',(req,res)=>{
    var url_parts = geturl.parse(req.url, true);
    var query = url_parts.query;
    var cname=query.cname;
    var data = { 
        "Catagory": cname
      } 
      
      db.collection('Catagories').find(data).toArray(function(err, result){ 
          
        if (err) throw err;
                res.json(result);
    });			
  });

  app.get('/checkPlaylist',(req,res)=>{
    var url_parts = geturl.parse(req.url, true);
    var query = url_parts.query;
    var cname=query.cname;
    var data = { 
        "name": cname
      } 
      
      db.collection('playlists').find(data).toArray(function(err, result){ 
          
        if (err) throw err;
                res.json(result);
    });			
  });

  app.get('/checkSong',(req,res)=>{
    var url_parts = geturl.parse(req.url, true);
    var query = url_parts.query;
    var cname=query.cname;
    var data = { 
        "name": cname
      } 
      
      db.collection('songs').find(data).toArray(function(err, result){ 
          
        if (err) throw err;
                res.json(result);
    });			
  });

  app.get('/loadSongs',(req,res)=>{
    MongoClient.connect(url,{
      useNewUrlParser: true,
      useUnifiedTopology: true
      }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("rythm");
      //Find the first document in the customers collection:
      dbo.collection("songs").find({}).toArray( function(err, result) {
        if (err) throw err;
        //console.log("catagories ok");
        res.json(result);
        db.close();
      });
  });
  })

  app.post('/api/upload',upload.single('Song'), function (req, res) {
		console.log("calling uploader");
		if (!req.file) {
			console.log("No file received");
			return res.send({
			  success: false
			});
		
		  } else {
			console.log('file received successfully');
			return res.send({
			  success: true
			})
		  }
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

  app.get('/loadCataWithSongsCount',(req,res)=>{
    MongoClient.connect(url,{
      useNewUrlParser: true,
      useUnifiedTopology: true
      }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("rythm");
      //Find the first document in the customers collection:
      dbo.collection("songs").aggregate([{$group : {_id : "$catagory", count : {$sum : 1}}}]).toArray( function(err, result) {
        if (err) throw err;
        //console.log(result);
        res.json(result);
      });
  });
  })

  app.get('/loadPlaylists',(req,res)=>{
    MongoClient.connect(url,{
      useNewUrlParser: true,
      useUnifiedTopology: true
      }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("rythm");
      //Find the first document in the customers collection:
      dbo.collection("playlists").find({}).toArray( function(err, result) {
        if (err) throw err;
        //console.log(result);
        res.json(result);
        db.close();
      });
  });
  })

  app.get('/removePlaylist',(req,res)=>{
    var url_parts = geturl.parse(req.url, true);
    var query = url_parts.query;
    var name=query.name;
    var fname = query.fname;
    var data = {  
        "name":name
      } 
      const path = '../../rythm/src/assets/songs/'+fname ;

      fs.unlink(path, (err) => {
        if (err) {
          console.error(err)
          return
        }
      
        //file removed
      })

      console.log("deleted playlist : "+data.name);
    db.collection('playlists').deleteOne(data,function(err, result){ 
      if (err) throw err;
      res.json(result.result);
    });	  
  });

  app.get('/removeSong',(req,res)=>{
    var url_parts = geturl.parse(req.url, true);
    var query = url_parts.query;
    var name=query.sname;
    var fname = query.fname;
    var data = {  
        "name":name
      } 
      const path = '../../rythm/src/assets/songs/'+fname ;

      fs.unlink(path, (err) => {
        if (err) {
          console.error(err)
          return
        }
      
        //file removed
      })

      console.log("deleted song: "+data.name);
    db.collection('songs').deleteOne(data,function(err, result){ 
      if (err) throw err;
      res.json(result.result);
    });	  
  });

app.get('/addCatagory',(req,res)=>{
    var url_parts = geturl.parse(req.url, true);
    var query = url_parts.query;
    var cname=query.cname;
    var data = { 
        "Catagory": cname
      } 
      
      db.collection('Catagories').insertOne(data,function(err, result){ 
          if (err) throw err;  
            res.json(result.result);
      });			
  });

  app.post('/addPlaylist',(req,res)=>{
    let data =req.body;
    db.collection('playlists').insertOne(data,function(err, result){ 
      if (err) throw err;  
        res.json(result.result);
    });
      		
  });

  app.post('/updateSongs',(req,res)=>{
    let mainobj =req.body;
    var myquery = { "name": mainobj.oldnm };
    var newvalues = { $set: mainobj.plobj };
    db.collection("songs").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
        
    });	
    res.json("{n:1,ok:1}");
  });

  app.post('/updatePlaylist',(req,res)=>{
    let mainobj =req.body;
    var myquery = { "name": mainobj.oldnm };
    var newvalues = { $set: mainobj.plobj };
    db.collection("playlists").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
        
    });	
    res.json("{n:1,ok:1}");
  });

  app.post('/songAddToPls',(req,res)=>{
    let obj =req.body;
    var sid=obj.sid;
    var plarr=obj.plarr;
    var r="";
    db.collection("playlists").find({}).toArray( function(err, result) {
      if (err) throw err;
      var pls=result;
      for(var i of plarr)
      {
          for(var j of pls)
          {
            if(j.name==i)
            {
              j.songs.push(sid)
              var myquery = { "name": j.name };
              var newvalues = { $set: j };
              db.collection("playlists").updateOne(myquery, newvalues, function(err, res) {
              if (err) throw err;
                
              });
              break;
            }
          }
      }
      res.json(result);
    });
  });

  app.get('/renameCatagory',(req,res)=>{
      var url_parts = geturl.parse(req.url, true);
      var query = url_parts.query;
      var cnewname=query.cnewname;
      var coldname=query.coldname;
      var myquery = { "Catagory": coldname };
      var data = { 
          "Catagory": cnewname
        } 
      var newvalues = { $set: data };
      db.collection("Catagories").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
         
      });	
      res.json("{n:1,ok:1}");		
  });

  app.get('/adminHome',(req,res)=>{
    var resJeson={};
    MongoClient.connect(url,{
      useNewUrlParser: true,
      useUnifiedTopology: true
      }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("rythm");
      //Find the first document in the customers collection:
      dbo.collection("playlists").find({}).toArray( function(err, result) {
        if (err) throw err;
        resJeson.plCount=result.length;
        dbo.collection("songs").find({}).toArray( function(err, result1) {
          if (err) throw err;
          resJeson.songCount=result1.length;
          dbo.collection("Catagories").find({}).toArray( function(err, result2) {
            if (err) throw err;
            resJeson.catCount=result2.length;
            dbo.collection("users").find({}).toArray( function(err, result3) {
              if (err) throw err;
              resJeson.userCount=result3.length;
              //console.log(resJeson);
              db.close();
              res.json(resJeson);
            });
          });
        });
      });
      
      
    });
  //console.log(resJeson);
  })

const prt = 8080;
app.listen(prt,function(){
	console.log("server listening at port "+prt);
})