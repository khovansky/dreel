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
      date_start: dateStart,
      date_finish: dateFinish
    });
    return seq;
  }

  getUsers() {
    let seq = this.api.post('http://api.dreel.ru/users/', {
      access_token: this.user.access_token
    });
    return seq;
  }

  loadReportTime(dateFrom, dateTo, user_id) {
    let seq = this.api.post('http://api.dreel.ru/reports/apps/', {
      access_token: this.user.access_token,
      date_from: dateFrom,
      date_to: dateTo,
      user_id: user_id
    });
    return seq;
  }

  loadReportPillarTime(date, user_id) {
    let seq = this.api.post('http://api.dreel.ru/timesheet/', {
      access_token: this.user.access_token,
      date: date,
      user_id: user_id
    });


      return seq;
  }


}

