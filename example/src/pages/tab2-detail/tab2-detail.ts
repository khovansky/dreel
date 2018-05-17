import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Projects} from "../../providers/projects/projects";
import { User } from '../../models/User';
import { IUser } from '../../interfaces/IUser';


/**
 * Generated class for the Tab2DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab2-detail',
  templateUrl: 'tab2-detail.html',
})
export class Tab2DetailPage implements OnInit{
  item: any;
  users: User[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private projects: Projects) {
    this.item=navParams.get('item');
    this.users = [];
    // this.project.getRates();
  }

  ngOnInit (){
    this.projects.getProjectDetail(this.item.id).subscribe((resp: any) => {
      console.log(resp.items);
      resp.items.forEach((item: IUser) => {
        const user = new User(item);
        this.users.push(user);
      });

      console.log(this.users);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2DetailPage');
  }

}
