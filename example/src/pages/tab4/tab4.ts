import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EmployeesPage} from "../employees/employees";
import {InvitePage} from "../invite/invite";
import {ReportPage} from "../report/report";
import {LoginPage} from "../login/login";
import {PillartimeReportPage} from "../pillartime-report/pillartime-report";
import {PillartimeReportListPage} from "../pillartime-report-list/pillartime-report-list";

/**
 * Generated class for the Tab4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab4',
  templateUrl: 'tab4.html',
})
export class Tab4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab4Page');
  }

  clickemployee() {
    this.navCtrl.push(EmployeesPage);
  }

  clickinvite() {
    this.navCtrl.push(InvitePage);
  }

  clickreport() {
    this.navCtrl.push(ReportPage);
  }

  onExit() {
    localStorage.removeItem('access_token');
    this.navCtrl.push(LoginPage);
  }

  clickinvite1() {
    this.navCtrl.push(PillartimeReportListPage);
  }
}
