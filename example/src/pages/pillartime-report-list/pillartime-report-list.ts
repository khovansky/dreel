import {Component, OnInit, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

import {Reports} from "../../providers/reports/reports";
import {IUserListItem} from "../../interfaces/IUserListItem";
import * as moment from "moment";
import {Moment} from "moment";
import {ITask} from "../../interfaces/ITask";

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
  public startTime: Date;
  public currentDate: Moment;
  public lastWeekDate: Moment;

  public allTime = 0 ;
  public allTimeMinute = 0;
  public allTimeHours = 0;
  public nameTime :string;

  @ViewChild('barCanvas') barCanvas;

  public barChart: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _reports: Reports) {
    this.users = [];

    // this._reports.getUsers().subscribe((data: any) => this.users = data.users);
    this.currentDate = moment();
    this.lastWeekDate = moment();
    this.lastWeekDate.subtract(7,'days');

  }

  ngOnInit() {
    this._reports.getUsers().subscribe((data: any) => this.users = data.users);
  }

  loadReport (){
    this.allTime=0;
    this.data=1526835599;
    this.showData = false;
    this.nameTime=this.selectedUser.name;
    this._reports.loadReportPillarTime(this.data, this.selectedUser.id)
      .subscribe((data: any) => {
        this.showData = true;
        const labels = data.data.map(item => item.date);
        const _dataSet = [];
        const _data: { date: string; tasks: ITask[] }[]  = data.data;
          _data.forEach(item=>{
            let duration = 0;
            item.tasks.forEach(task => {
              duration = duration + task.length;
            });
            this.allTime=this.allTime+duration;
          _dataSet.push(duration);

        });
          this.allTimeHours = Math.ceil(this.allTime / 60);
          this.allTimeMinute = this.allTime % 60;

        setTimeout(() => {
          this.barChart = new Chart(this.barCanvas.nativeElement, {

            type: 'bar',
            data: {
              labels,
              datasets: [{
                label: ' ',
                data: _dataSet,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 0, 255, 0.2)'
                ],
                borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 0, 255, 1)'
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
        });


      })
  }

  ionViewDidLoad() {



  }
}
