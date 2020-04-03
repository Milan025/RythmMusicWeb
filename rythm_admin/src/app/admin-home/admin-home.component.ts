import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(public http:Http,public router:Router,public cookie:CookieService) { }
  count
  loadpl
  categories
  ngOnInit() {
    if(!(this.cookie.check("Adminuname") && this.cookie.check("Adminuid")))
      this.router.navigate([''])
    else
    {
      this.http.get("http://localhost:8080/adminHome").subscribe((data) => this.loadCount(data));
      this.http.get("http://localhost:8080/loadPlaylists").subscribe((data) => this.loadPlaylists(data));
      this.http.get("http://localhost:8080/loadCataWithSongsCount").subscribe((data) => this.loadCatag(data));
    }
  }
  loadCount(data)
  {
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    this.count=arr;
    //console.log(arr);
  }
  loadPlaylists(data)
  {
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    this.loadpl=arr;
  }
  loadCatag(data)
  {
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    this.categories=arr;
  }
}
