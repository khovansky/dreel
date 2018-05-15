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
      if(window.localStorage.getItem('access_token')){
          this.access_token = window.localStorage.getItem('access_token');
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

  // signup(accountInfo: any) {
  //   let seq = this.api.post('signup', accountInfo).share();
  //
  //   seq.subscribe((res: any) => {
  //     // If the API returned a successful response, mark the user as logged in
  //     if (res.status == 'success') {
  //       this._loggedIn(res);
  //     }
  //   }, err => {
  //     console.error('ERROR', err);
  //   });
  //
  //   return seq;
  // }


  // logout() {
  //   this._user = null;
  // }

  /*
   * Process a login/signup response to store user data
   *!/
  _loggedIn(resp) {
    this._user = resp.user;
  }*/
}
