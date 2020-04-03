import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import * as $ from 'jquery';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  constructor(public http:Http,public auth:AuthService,public router:Router,public cookie:CookieService) {
    
   }
   mail
   nm
  ngOnInit() {
    if(this.cookie.check("uid"))
      this.router.navigate([''])

    this.shadow();
    }
  signupUser(event){
    event.preventDefault()
    const target = event.target;
    console.log("asdsd"+target.querySelector('#unm').value+"1")
    if(target.querySelector('#unm').value.length ==0  || target.querySelector('#semail').value.length ==0
    || target.querySelector('#spass').value.length == 0 || target.querySelector('#srepass').value.length == 0)
    {
      alert("Some field missing ")
      location.reload();
    }
    const unm = target.querySelector('#unm').value;
    const uemail = target.querySelector('#semail').value;
    const pass = target.querySelector('#spass').value;
    const cpass = target.querySelector('#srepass').value;
    
    this.mail=uemail;
    this.nm=unm;
    
    if(pass.length < 8)
    {
      alert("password must be of atleast 8 character")
      location.reload()
    }
    if(cpass!=pass)
      alert("Both Password not matched!!")
    else
    {
      
      this.http.get("http://localhost:3000/checkac?umail="+this.mail).subscribe((data) => this.tempcookie(data,unm,uemail,pass));
    }
  }
  tempcookie(data,unm,uemail,pass){
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    console.log(arr);
    if(arr=='')
    {
      var otp='/otp/'+this.mail;
      this.cookie.set("tuname",unm);
      this.cookie.set("tupass",pass);
      this.cookie.set("tumail",uemail);
      this.cookie.set("forwhat","sign");
      //this.http.get("http://localhost:3000/otp?umail="+this.mail+"&forwhat="+this.cookie.get("forwhat")).subscribe((data) => this.displayData(data));
      this.router.navigate([otp])
    }
    else
      alert("Account already exsist on "+this.mail);
  }

  shadow()
  {
    $(document).ready(function(){
      $("#unm").mouseover(function(){
        $('#unm').addClass('shadow');
      });
      $("#unm").mouseout(function(){
        $('#unm').removeClass('shadow');
      });
      $("#sgbtn").mouseover(function(){
        $('#sgbtn').addClass('shadow');
      });
      $("#sgbtn").mouseout(function(){
        $('#sgbtn').removeClass('shadow');
      });
      $("#semail").mouseover(function(){
        $('#semail').addClass('shadow');
      });
      $("#semail").mouseout(function(){
        $('#semail').removeClass('shadow');
      });
      $("#spass").mouseout(function(){
        $('#spass').removeClass('shadow');
      });
      $("#spass").mouseover(function(){
        $('#spass').addClass('shadow');
      });
      $("#srepass").mouseover(function(){
        $('#srepass').addClass('shadow');
      });
      $("#srepass").mouseout(function(){
        $('#srepass').removeClass('shadow');
      });
    });
  }
}
