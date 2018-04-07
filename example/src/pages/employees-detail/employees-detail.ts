import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Employees } from "../../providers/employees/employees";

/**
 * Generated class for the EmployeesDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employees-detail',
  templateUrl: 'employees-detail.html',
})
export class EmployeesDetailPage {
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, employees: Employees) {
    this.user=navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeesDetailPage');
  }

}
