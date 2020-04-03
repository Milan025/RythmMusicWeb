import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-catagorydisplay',
  templateUrl: './catagorydisplay.component.html',
  styleUrls: ['./catagorydisplay.component.css']
})
export class CatagorydisplayComponent implements OnInit {

  
  constructor(public http:Http,public router:Router,public cookie:CookieService,public route:ActivatedRoute,public _interservice:AuthService) {   }
  snm='(select a song)'
  songs
  pnm
  isLogin=true;
  user
  rurl=this.router.url;
  msbapTitle
  msbapAudioUrl
  msbapDisplayTitle=true
  msaapDisplayVolumeControls=true
  ngOnInit() {
    if(this.cookie.check("uid")){
      this.isLogin=false;
      this.user=this.cookie.get("uname");
    }
    this.pnm=this.route.snapshot.paramMap.get('pname');
    this.http.get("http://localhost:3000/loadcategorysongs?pname="+this.pnm).subscribe((data) => this.displayData(data));
      
  }
  displayData(data){
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    console.log(arr);
    this.songs=arr;
  }
  
  logOut(){
    
    this.cookie.delete("uname");
    this.cookie.delete("uid");
    this.isLogin=true;
    location.reload();
    console.log("logout");
  }

  likeSong(value){
    console.log(value)
    this.http.get("http://localhost:3000/like?uname="+this.cookie.get("uid")+"&song="+value).subscribe((data) => this.likedSong(data));
  }
  likedSong(data){
    var y = Array.of(data._body);
    var arr=JSON.parse(<any>y);
    if(arr.n==1){
      alert("Song is added to favourite");
    }
    else
      alert("Song is removed from favourite");
  }
  playSong(value){
    this.msbapTitle = value;
    this.msbapAudioUrl = './assets/songs/'+value+'.mp3';
  }
 
  searchSong(value:string){
    console.log(JSON.parse(value));
  }

}
