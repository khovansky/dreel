import { Component, Input } from '@angular/core';
import {User} from "../../../models/User";

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent {
  @Input() user: User;
}
