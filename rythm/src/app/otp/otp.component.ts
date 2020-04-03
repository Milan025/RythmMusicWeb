import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import * as $ from 'jquery';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  mail
  arrr
  constructor(public http:Http,public route:ActivatedRoute,public router:Router,public cookie:CookieService) { }

  ngOnInit() {
    
    this.mail=this.cookie.get("tumail");
    this.http.get("http://localhost:3000/otp?umail="+this.mail+"&forwhat="+this.cookie.get("forwhat")).subscribe((data) => this.displayData(data));
    
    this.shadow()
  }
  
  displayData(data){
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    this.arrr=arr
  }
  Otp(event){
    event.preventDefault()
    const target = event.target;
    const otp = target.querySelector('#otp').value;
    if(otp==this.arrr){
      if(this.cookie.get("forwhat")=="sign"){

        var unm=this.cookie.get("tuname");
        var uemail=this.cookie.get("tumail");
        var pass=this.cookie.get("tupass");
        
        this.http.get("http://localhost:3000/signup?uname="+unm+"&uemail="+uemail+"&pass="+pass).subscribe((data) => this.check(data));
      
      }
      if(this.cookie.get("forwhat")=="forgot")
        this.router.navigate(['/changepass'])
  }
  else
      alert("Incorrect otp")
  }

  check(data)
  {
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    if(arr.n==1 && arr.ok==1)
    {
      this.cookie.set("uname",this.cookie.get("tuname"),365);
      this.cookie.set("uid",this.cookie.get("tumail"),365);
      this.cookie.set("tumail",this.cookie.get("tumail"),-1);
      this.cookie.set("forwhat",this.cookie.get("forwhat"),-1);
      this.cookie.set("tupass",this.cookie.get("tupass"),-1);
      this.cookie.set("tuname",this.cookie.get("tuname"),-1);
      alert("Successfully Signedup")
      this.router.navigate([''])
    }
    else
      alert("Server Error!! Please try again!!")
  }

  shadow()
  {
    $(document).ready(function(){
      $("#otp").mouseover(function(){
        $('#otp').addClass('shadow');
      });
      $("#otp").mouseout(function(){
        $('#otp').removeClass('shadow');
      });
      $("#fbtn").mouseover(function(){
        $('#fbtn').addClass('shadow');
      });
      $("#fbtn").mouseout(function(){
        $('#fbtn').removeClass('shadow');
      });
    });
  }
}
