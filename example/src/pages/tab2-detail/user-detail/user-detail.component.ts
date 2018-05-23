import { Component, Input } from '@angular/core';
import {User} from "../../../models/User";
import { Projects } from '../../../providers/projects/projects';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent {
  @Input() user: User;
  @Input() project;

  constructor(private _projects: Projects) {}

  refreshRateProject(event) {
    event.preventDefault();
    // this.users.refreshRateProject(this.users);
    console.log(this.user);
    this._projects.refreshRateProject(this.project, this.user);
  }
}
