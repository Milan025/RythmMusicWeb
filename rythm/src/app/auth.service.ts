import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Subject} from 'rxjs';
/*
interface regesterResponse{
  success:boolean
}
*/
@Injectable()
export class AuthService {
  private _msg = new Subject<string>();
  msg$ = this._msg.asObservable();
  constructor(private http:Http) { }

  /*getUserDetails(unm,pass){N
    //user details
  }*/
  sendMsg(message:string){
    console.log("ser:"+message);
    this._msg.next(message);
  }
  signupUser(unm,uemail,pass){ 
    console.log('in service');
    return this.http.post('http://localhost:3000/api/register',{
        unm,
        uemail,
        pass
    });
  }
}
