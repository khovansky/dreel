import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import {Employee} from "../../models/employee";
import {Employees} from "../../providers/employees/employees";



@IonicPage()
@Component({
  selector: 'page-employees',
  templateUrl: 'employees.html',
})
export class EmployeesPage {
  currentItems: Employee [] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public employees: Employees, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.employees.getItems().subscribe((resp: any) => {
      console.log(resp);

      resp.users.forEach(user => {
        this.currentItems.push(new Employee(user));
      });
    }, () => {});

    console.log('ionViewDidLoad EmployeesPage');
  }


}
