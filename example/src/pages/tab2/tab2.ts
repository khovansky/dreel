import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {Tab2DetailPage} from "../tab2-detail/tab2-detail";

import { Projects } from '../../providers/providers';
import { Project } from '../../models/project';
import {Employee} from "../../models/employee";

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {
  currentItems : Project[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public projects: Projects, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.projects.getItems().subscribe((resp: any) => {
      console.log(resp);
      // this.navCtrl.push(MainPage);
      resp.items.forEach(item => {
        this.currentItems.push(new Project(item));
      });
    }, () => {});

    console.log('ionViewDidLoad Tab2Page');
  }

  openItem(item: Project) {
    this.navCtrl.push(Tab2DetailPage, {item: item});
  }
}
