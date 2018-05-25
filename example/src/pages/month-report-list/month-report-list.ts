import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

import {Reports} from "../../providers/reports/reports";
import { IReport } from "../../interfaces/IReport";

/**
 * Generated class for the MonthReportListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-month-report-list',
  templateUrl: 'month-report-list.html',
})
export class MonthReportListPage {
  public startTime: Date;
  public endTime: Date;
  public reports: IReport[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private _reports: Reports) {
    this.startTime = new Date();
    this.endTime = new Date();
    this.reports = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MonthReportListPage');
  }

  loadReport() {
    console.log(this.startTime);
    this._reports.loadReport(moment(this.startTime).unix(), moment(this.endTime).unix()).subscribe((data: any) => {
      this.reports = data.chart;

      this.reports.map(report => {
        report.totalSum = 0;
        report.projects.forEach(project => {
          report.totalSum = report.totalSum + project.money;
        });
      });
      console.log(this.reports);
    });

    console.log(new Date(new Date(this.startTime).getTime()), new Date(new Date(this.endTime).getTime()));

  }


}
