import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-myplaylist',
  templateUrl: './myplaylist.component.html',
  styleUrls: ['./myplaylist.component.css']
})
export class MyplaylistComponent implements OnInit {

  constructor(public http:Http,public cookie:CookieService,public router:Router) { }
  user
  songs
  isLogin=true;
  msbapTitle
  msbapAudioUrl
  msbapDisplayTitle=true
  msaapDisplayVolumeControls=true
  ngOnInit() {
    
    if(this.cookie.check("uid")){
      this.isLogin=false;
      this.user=this.cookie.get("uname");
      this.http.get("http://localhost:3000/loadMyFavouriteSongs?uname="+this.cookie.get("uid")).subscribe((data) => this.displayData(data));
    }
    else
     this.router.navigate([""])

  }

  displayData(data){
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    this.songs=arr;
    console.log(arr)
  }

  logOut(){
    this.cookie.delete("uname");
    this.cookie.delete("uid");
    this.isLogin=true;
  }

  removeSong(value){
    console.log(value)
    this.http.get("http://localhost:3000/remove?uname="+this.cookie.get("uid")+"&song="+value).subscribe((data) => this.removedSong(data));
  }
  removedSong(data){
    var y = Array.of(data._body);
    var arr=JSON.parse(<any>y);
    if(arr.n==1){
      alert("Song is removed from favourite");
    }
  
  }

  playSong(value){
    //console.log("Songs:"+value);
    //this._interservice.sendMsg(value);
    this.msbapTitle = value;
    this.msbapAudioUrl = './assets/songs/'+value+'.mp3';
  }
}
