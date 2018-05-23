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

  getProjectDetail(id:number){
    return this.api.post('http://api.dreel.ru/project/rates/', {
      access_token: this.user.access_token,
      project_id: id
    })
  }

  refreshRateProject(projects, user) {
    const queryData = {
      access_token: this.user.access_token,
      project_id: projects.id,
      user_id : user.user_id,
      value : user.rate_value,
    };

    let seq = this.api.post('http://api.dreel.ru/project/rates/add', queryData).subscribe(response => console.log(response));

  }

}
