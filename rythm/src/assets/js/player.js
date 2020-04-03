var songs = ['Ae Dil Hai Mushkil','Bas Ek Baar','Bom Diggy Diggy','Dekhte Dekhte'];
var poster = ["./src/p1.jpg","./src/p2.jpg"];

var songtitle = document.getElementById("songtitle");
var fillbar = document.getElementById("fill");
var currenttime = document.getElementById("currenttime");
var song = new Audio();
var currentsong = 0;

//window.onload = playsong;
function Demo(msg){
    console.log(msg);
}
  
function playsong(s){
    currentsong=s;
    
    song.src = "/assets/songs/"+songs[currentsong]+".mp3";
    
    songtitle.textContent = songs[currentsong];
    
    song.play();

    $("#play img").attr("src","./src/pause.png");
    
}

song.addEventListener('timeupdate',function(){
    
        var position = song.currentTime/song.duration;
        
        fillbar.style.width = position*100+'%';
        
        convertTime(Math.round(song.currentTime));
        
        if(song.ended)
            next();
});

function playpause(){
    
    if(song.paused){
        song.play();
        $("#play img").attr("src","app/assets/images/pause.png");
    }
    else{
        song.pause();
        $("#play img").attr("src","app/assets/images/play.png");
    }
}


function convertTime(seconds){
    var min = Math.floor(seconds/60);
    var sec = seconds%60;
    min = (min<10)? "0"+min:min;
    sec = (sec<10)? "0"+sec:sec;
    currenttime.textContent = min + ":" + sec;
    
    totalTime(Math.round(song.duration));
}

function totalTime(seconds){
    var min = Math.floor(seconds/60);
    var sec = seconds%60;
    min = (min<10)? "0"+min:min;
    sec = (sec<10)? "0"+sec:sec;
    currenttime.textContent += "/" + min + ":" + sec;

}

function next(){
    
    currentsong++;
    
    if(currentsong>songs.length-1)
        currentsong=0;
    
    playsong(currentsong);
    $("#play img").attr("src","./src/pause.png");
    $("#image img").attr("src",poster[currentsong]);
}

function pre(){
    
    currentsong--;
    
    if(currentsong<0)
        currentsong=songs.length-1;
    
    playsong(currentsong);
    $("#play img").attr("src","./src/pause.png");
    $("#image img").attr("src",poster[currentsong]);
}

function decreaseVolume(){
    song.volume-=0.20;
}

function increaseVolume(){
    song.volume+=0.20;
}