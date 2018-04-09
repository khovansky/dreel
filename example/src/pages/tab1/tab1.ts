import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import {Tab1} from "../../models/tab1";
import {Tab1s} from "../../providers/tab1/tab1s";



@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {
  currentItems: Tab1 []=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public tab1s: Tab1s) {
  }

  ionViewDidLoad() {

    this.tab1s.getItems().subscribe((resp: any) => {
      console.log(resp);
      // this.navCtrl.push(MainPage);
      resp.items.forEach(item => {
        this.currentItems.push(new Tab1(item));
      });
    }, () => {});

    console.log('ionViewDidLoad Tab1Page');
  }

}
