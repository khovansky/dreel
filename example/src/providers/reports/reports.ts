import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';
import {User} from "../user/user";


@Injectable()
export class Reports {
  constructor(public api: Api, private user: User) { }

  loadReport(dateStart, dateFinish) {
    let seq = this.api.post('http://api.dreel.ru/reports/overall/', {
      access_token: this.user.access_token,
      date_from: dateStart,
      date_to: dateFinish
    });
    return seq;
  }


}
