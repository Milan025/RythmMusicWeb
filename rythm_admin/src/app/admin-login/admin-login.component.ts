import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})


export class AdminLoginComponent implements OnInit {

  constructor(public http:Http,public router:Router,public cookie:CookieService) { }
  name
  ngOnInit() {
    if((this.cookie.check("Adminuname") && this.cookie.check("Adminuid")))
      this.router.navigate(['home'])
  }
  loginUser(event){
    event.preventDefault()
    const target = event.target;
    const unm = target.querySelector('#uname').value;
    const pass = target.querySelector('#pass').value;
    this.http.get("http://localhost:8080/adminlogin?uname="+unm+"&pass="+pass).subscribe((data) => this.displayData(data));
    
  }

  displayData(data){
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    console.log(arr);
    if(arr.length==0)
      alert("Invalid Username/Password");
    else{
      //set cookie
      this.cookie.set("Adminuname",arr[0].UserName);
      this.cookie.set("Adminuid",arr[0]._id);
      this.router.navigate(['home'])
    }
  }
}
