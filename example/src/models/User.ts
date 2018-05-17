import {IUser} from "../interfaces/IUser";

export class User implements  IUser {
  user_id : number;
  length: number;
  project_color: string;
  project_id: number;
  project_name: string;
  rate_id: number;
  rate_value: number;
  reason: string;
  status: string;
  task_id:  number;
  task_name: string;
  timestamp: string;
  user_name: string;
  user_photo: string;

  constructor(user: IUser) {
    this.length = user.length;
    this.project_color =user.project_color;
    this.project_id=user.project_id;
    this.rate_id=user.rate_id;
    this.rate_value=user.rate_value;
    this.reason=user.reason;
    this.status=user.status;
    this.task_id=user.task_id;
    this.task_name=user.task_name;
    this.timestamp=user.timestamp;
    this.user_id = user.user_id;
    this.user_name=user.user_name;
    this.user_photo=user.user_photo;
  }
}
