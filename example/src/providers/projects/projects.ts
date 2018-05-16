import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';
import { User} from "../user/user";

@Injectable()
export class Projects {
  constructor(public api: Api, private user: User) { }

  getItems() {
    let seq = this.api.post('http://api.dreel.ru/projects/', {
      access_token: this.user.access_token
    });
    return seq;
  }
}
