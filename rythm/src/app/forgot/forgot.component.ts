import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import * as $ from 'jquery';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  constructor(public http:Http,public router:Router,public cookie:CookieService) { }
  umail
  ngOnInit() {
    if(this.cookie.check("uid"))
      this.router.navigate([''])
    
      this.shadow();
  }

  forgot(event){
    event.preventDefault()
    const target = event.target;
    const mail = target.querySelector('#femail').value;
    this.umail=mail;
    this.http.get("http://localhost:3000/forgotmail?umail="+mail).subscribe((data) => this.displayData(data));
  }
  displayData(data){
    var otp='/otp/'+this.umail;
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    if(arr.length!=0){
      this.cookie.set("forwhat","forgot");
      this.cookie.set("tumail",this.umail);
      this.router.navigate([otp])
    }
    else
      alert("No rythm account exists for "+this.umail)
  }

  shadow()
  {
    $(document).ready(function(){
      $("#femail").mouseover(function(){
        $('#femail').addClass('shadow');
      });
      $("#femail").mouseout(function(){
        $('#femail').removeClass('shadow');
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
