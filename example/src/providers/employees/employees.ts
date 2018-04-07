import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';
import {Employee} from "../../models/employee";

@Injectable()
export class Employees {
  constructor(public api: Api) { }

  getItems() {
    let seq = this.api.post('http://api.dreel.ru/users/', {
      access_token: '566af69bb00e7bbfa9eceeb4b8d14e5a2321'
    });
    return seq;
  }

  query(params?: any) {
    return this.api.post('http://api.dreel.ru/users/', params);
  }
}
