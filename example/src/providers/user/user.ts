import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';

import { Api } from '../api/api';

@Injectable()
export class User {
    access_token: any;
  _user: any;

  constructor(public api: Api) {

  }

  checkAccessToken() {
      if(localStorage.getItem('access_token')){
          this.access_token = localStorage.getItem('access_token');
          return true;
      }
      return false;
  }

  login(accountInfo: any) {
    console.log(accountInfo);
    let seq = this.api.post('http://api.dreel.ru/desktop/auth', accountInfo);
    return seq;
  }

  saveAccessToken(access_token) {
      localStorage.setItem('access_token', access_token);
      this.access_token = access_token;
  }


}
