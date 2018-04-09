import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
export class Tab2DetailPage {
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item=navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2DetailPage');
  }

}
