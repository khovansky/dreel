import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { User } from '../providers'
import { Api } from '../api/api';
import {Employee} from "../../models/employee";

@Injectable()
export class Employees {
  constructor(public api: Api) { }

  getItems() {
    let seq = this.api.post('http://api.dreel.ru/users/overall/', {
      access_token: '566af69bb00e7bbfa9eceeb4b8d14e5a2321'
    });
    return seq;
  }

  query(params?: any) {
    return this.api.post('http://api.dreel.ru/users/overall/', params);
  }

    refreshRate(user) {
        const queryData = {
            access_token: '566af69bb00e7bbfa9eceeb4b8d14e5a2321',
            user_id: user.id,
            rate_value: user.rate_value,
        };

        let seq = this.api.post('//api.dreel.ru/users/rate', queryData).subscribe(response => console.log(response));
    }
}
