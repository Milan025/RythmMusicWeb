import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  constructor(public cookie:CookieService) { }

 
  isLogin=true;
  user
  ngOnInit() {
    if(this.cookie.check("Adminuid")){
      this.isLogin=false;
      this.user=this.cookie.get("Adminuname");
    }
  }
  logOut(){
    
    this.cookie.delete("Adminuname");
    this.cookie.delete("Adminuid");
    this.isLogin=true;
  }
}
