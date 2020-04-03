import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import * as $ from 'jquery';
import { CookieService } from 'ngx-cookie-service';
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  playlists
  constructor(public http:Http,public cookie:CookieService) { }
  searchText;
  catagories;
  isLogin=true;
  user
  msbapTitle = 'Audio Title';
  msbapAudioUrl = 'Link to audio URL';   
     
  msbapDisplayTitle = false; 
  msbapDisplayVolumeControls = true; 
  recentSongs;
  ngOnInit() {
    if(this.cookie.check("uid")){
      this.isLogin=false;
      this.user=this.cookie.get("uname");
    }
    this.http.get("http://localhost:3000/loadplaylist").subscribe((data) => this.displayData(data));
    this.http.get("http://localhost:3000/loadRecentSongs").subscribe((data) => this.loadSongs(data));
    this.http.get("http://localhost:3000/loadCata").subscribe((data) => this.loadCatag(data));
    $(document).ready(function(){
     
      $("#search").mouseover(function(){
      $('#search').addClass('shadow');
      });
      $("#search").mouseout(function(){
      $('#search').removeClass('shadow');
      });
      $("#login").mouseover(function(){
      $('#login').addClass('shadow');
      });
      $("#login").mouseout(function(){
      $('#login').removeClass('shadow');
      });
      });
        
  }
  loadCatag(data)
  {
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    this.catagories=arr;
  }
  loadSongs(data)
  {
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    this.recentSongs=arr;
    //console.log("ress"+this.recentSongs);
  }
  playSong(link,Title)
  {
    //console.log(link+" "+Title)
    this.msbapAudioUrl = './assets/songs/'+ link;
    this.msbapTitle = Title;
    this.msbapDisplayTitle = true;
    
  }
  displayData(data){
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);    
    this.playlists=arr;
  }
  searchSong(value:string){
    this.http.get("http://localhost:3000/searchsong?ssong="+value).subscribe((data) => this.songList(data));
    console.log(value);
  }
  songList(data){

  }
  logOut(){
    this.cookie.delete("uname");
    this.cookie.delete("uid");
    this.isLogin=true;
  }
}
