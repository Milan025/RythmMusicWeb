import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  constructor(public http:Http,public router:Router,public cookie:CookieService) { }
  name
  ngOnInit() {
    if(this.cookie.check("uid"))
      this.router.navigate([''])
    this.shadow();
      
  }
  loginUser(event){
    event.preventDefault()
    const target = event.target;
    if(target.querySelector('#lemail').value.length == 0 || target.querySelector('#lpass').value.length == 0)
    {
      alert("some field missing")
      location.reload();
    }
    const unm = target.querySelector('#lemail').value;
    const pass = target.querySelector('#lpass').value;
    this.http.get("http://localhost:3000/login?uname="+unm+"&pass="+pass).subscribe((data) => this.displayData(data));
    
  }

  displayData(data){
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    if(arr.length==0)
      alert("Invalid Username/Password");
    else{
      //set cookie
      this.cookie.set("uname",arr[0].name,365);
      this.cookie.set("uid",arr[0].email,365);
      this.router.navigate([''])
    }
  }

  shadow()
  {
    $(document).ready(function(){
     
      $("#lemail").mouseover(function(){
      $('#lemail').addClass('shadow');
      });
      $("#lemail").mouseout(function(){
      $('#lemail').removeClass('shadow');
      });
      $("#lpass").mouseover(function(){
      $('#lpass').addClass('shadow');
      });
      $("#lpass").mouseout(function(){
      $('#lpass').removeClass('shadow');
      });
      $("#lgbtn").mouseover(function(){
      $('#lgbtn').addClass('shadow');
      });
      $("#lgbtn").mouseout(function(){
      $('#lgbtn').removeClass('shadow');
      });
      });
  }
}
