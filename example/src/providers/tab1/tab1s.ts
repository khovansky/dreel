import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';
import {Tab1} from "../../models/tab1";
import { User} from "../user/user";


@Injectable()
export class Tab1s {
  constructor(public api: Api, private user: User) { }

  getItems() {
    let seq = this.api.post('http://api.dreel.ru/manualtime/', {
      access_token: this.user.access_token
    });
    return seq;
  }

  query(params?: any) {
    return this.api.post('http://api.dreel.ru/manualtime/', params);
  }
}
