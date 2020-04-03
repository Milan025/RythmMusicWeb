import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import * as $ from 'jquery';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {

  constructor(public http:Http,public router:Router,public cookie:CookieService) { }

  ngOnInit() {
    if(!this.cookie.check("tumail"))
      this.router.navigate([''])

    this.shadow()
  }
  changePass(event){
    event.preventDefault()
    var mail=this.cookie.get("tumail");
    const target = event.target;
    const pass = target.querySelector('#pass').value;
    const repass = target.querySelector('#repass').value;
    if(pass!=repass)
      alert("Both Password not matched!!")
    else
      this.http.get("http://localhost:3000/changepass?pass="+pass+"&mail="+mail).subscribe((data) => this.displayData(data));
  }
  displayData(data){
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    if(arr.length!=0){
      this.cookie.set("tumail",this.cookie.get("tumail"),-1);
      this.cookie.set("forwhat",this.cookie.get("forwhat"),-1);
      alert("Your password has been changed. Now, login with new password")
      this.router.navigate(['/login'])
    }
  }

  shadow()
  {
    $(document).ready(function(){
      $("#pass").mouseover(function(){
        $('#pass').addClass('shadow');
      });
      $("#pass").mouseout(function(){
        $('#pass').removeClass('shadow');
      });
      $("#repass").mouseover(function(){
        $('#repass').addClass('shadow');
      });
      $("#repass").mouseout(function(){
        $('#repass').removeClass('shadow');
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
