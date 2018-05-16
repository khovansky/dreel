import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Employees } from "../../providers/providers";

@IonicPage()
@Component({
  selector: 'page-employees-detail',
  templateUrl: 'employees-detail.html',
})
export class EmployeesDetailPage {
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public employees: Employees) {
    this.user=navParams.get('user');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeesDetailPage');
  }

  refreshRate(event) {
      event.preventDefault();
      this.employees.refreshRate(this.user)
  }

  refreshTimeRate(event) {
    event.preventDefault();
    this.employees.refreshTimeRate(this.user);
  }
}
