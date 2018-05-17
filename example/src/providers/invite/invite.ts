import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';
import { User} from "../user/user";

@Injectable()
export class Invite {
  constructor(public api: Api, private user: User) { }

  getLinks() {
    let seq = this.api.post('http://api.dreel.ru/company/inviteinfo/', {
      access_token: this.user.access_token
    });
    return seq;
  }
}
