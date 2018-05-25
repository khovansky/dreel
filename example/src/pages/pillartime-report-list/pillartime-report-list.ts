import {Component, OnInit, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

import {Reports} from "../../providers/reports/reports";
import {IUserListItem} from "../../interfaces/IUserListItem";
import * as moment from "moment";

@IonicPage()
@Component({
  selector: 'page-pillartime-report-list',
  templateUrl: 'pillartime-report-list.html',
})
export class PillartimeReportListPage implements OnInit {

  public showData: boolean;
  public users: IUserListItem[];
  public selectedUser: IUserListItem;
  public data : number;

  @ViewChild('barCanvas') barCanvas;

  public barChart: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _reports: Reports) {
    this.users = [];
  }

  ngOnInit() {
    this._reports.getUsers().subscribe((data: any) => this.users = data.users);
  }

  loadReport (){
    this.data=1526835599;
    this.showData = false;
    this._reports.loadReportPillarTime(this.data, this.selectedUser.id)
      .subscribe((data: any) => {
        this.showData = true;
      })
  }

  ionViewDidLoad() {

    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [50, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });

  }
}
