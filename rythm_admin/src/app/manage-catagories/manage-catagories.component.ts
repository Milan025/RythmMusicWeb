import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-manage-catagories',
  templateUrl: './manage-catagories.component.html',
  styleUrls: ['./manage-catagories.component.css']
})
export class ManageCatagoriesComponent implements OnInit {

  constructor(public http:Http,public router:Router,public cookie:CookieService) { }
  catagories
  rename=""
  succate
  sucnewcate
  ngOnInit() {
    if(!(this.cookie.check("Adminuname") && this.cookie.check("Adminuid")))
      this.router.navigate([''])
    else
      this.http.get("http://localhost:8080/loadCata").subscribe((data) => this.loadCatag(data));
  }
  
  addCatagory(event){
    event.preventDefault()
    const target = event.target;
    const cname = target.querySelector('#cname').value;
    this.http.get("http://localhost:8080/checkCatagory?cname="+cname).subscribe((data) => this.checkCatagory(data,cname));
  }

  renameCat(event)
  {
    event.preventDefault()
    const target = event.target;
    const cname = target.querySelector('#rename').value;
    console.log(cname);
    this.http.get("http://localhost:8080/checkCatagory?cname="+cname).subscribe((data) => this.checkRenameCatagory(data,cname));
  }
  
  checkCatagory(data,cname)
  {
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    if(arr.length==0)
      this.http.get("http://localhost:8080/addCatagory?cname="+cname).subscribe((data) => this.displayData(data));
    else
      this.sucnewcate="Catagory of '"+cname+"' exists!!! Please, try with differnt name"
      //alert("Catagory of '"+cname+"' exists!!! Please, try with differnt name");
  }
  displayData(data){
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    if(arr.length==0)
      alert("Some Problem Occured!! Please Try Leter!!!");
    else{
      alert("Successfully added new Catagory");
      location.reload();
    }
      
  }
  
  loadCatag(data)
  {
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    this.catagories=arr;
  }
  selectChangeHandler (event: any) {
    var t=event.target.value;
    if(t!="-select-")
      this.rename=t;
    else
      this.rename="";
  }
  
  checkRenameCatagory(data,cname)
  {
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    
    if(arr.length==0)
      this.http.get("http://localhost:8080/renameCatagory?cnewname="+cname+"&coldname="+this.rename).subscribe((data) => this.displayRenameData(data,cname));
    else
      this.succate="Catagory of "+cname+" exists!!! Please, try with differnt name";
      //alert("Catagory of "+cname+" exists!!! Please, try with differnt name");
  }
  
  displayRenameData(data,cname)
  {
    var x;
    x=data;
    var y = Array.of(x._body);
    var arr=JSON.parse(<any>y);
    if(arr.length==0)
      alert("Some Problem Occured!! Please Try Leter!!!");
    else{
      alert("Successfully changed name of Catagory:'"+this.rename+"' to '"+cname+"'");
      //this.succate="Successfully changed name of Catagory:'"+this.rename+"' to '"+cname+"'";
      location.reload();
    }
  }
  
}
