import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { User } from '../user/user';
import { Api } from '../api/api';

@Injectable()
export class Employees {
  constructor(public api: Api, private user: User) { }

  getItems() {
    let seq = this.api.post('http://api.dreel.ru/users/overall/', {
      access_token: this.user.access_token
    });
    return seq;
  }

  query(params?: any) {
    return this.api.post('http://api.dreel.ru/users/overall/', params);
  }

    refreshRate(user) {
        const queryData = {
            access_token: this.user.access_token,
            user_id: user.id,
            rate_value: user.rate_value,
        };

        let seq = this.api.post('//api.dreel.ru/users/rate', queryData).subscribe(response => console.log(response));
    }

    refreshTimeRate(user) {
      const queryData = {
        access_token: this.user.access_token,
        user_id: user.id,
        rate_value: user.time_afk,
      };

      let seq = this.api.post('//api.dreel.ru/users/rate', queryData).subscribe(response => console.log(response));

    }
}
