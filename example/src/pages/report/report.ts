import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {MonthReportListPage} from "../month-report-list/month-report-list";
import {PillartimeReportListPage} from "../pillartime-report-list/pillartime-report-list";
import {EattimeReportListPage} from "../eattime-report-list/eattime-report-list";

/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
  }

  monthreport(){
    this.navCtrl.push(MonthReportListPage);
  }

  pillartime(){
    this.navCtrl.push(PillartimeReportListPage);
  }

  eattime(){
    this.navCtrl.push(EattimeReportListPage);
  }

}
