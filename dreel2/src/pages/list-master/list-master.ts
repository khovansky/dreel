import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Projects } from '../../providers/providers';
import { Project } from '../../models/project';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Project[] = [];

  constructor(public navCtrl: NavController, public projects: Projects, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    this.projects.getItems().subscribe((resp: any) => {
      console.log(resp);
      // this.navCtrl.push(MainPage);
      resp.items.forEach(item => {
        this.currentItems.push(new Project(item));
      });
    }, () => {});
  }
}

