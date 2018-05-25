import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Reports} from "../../providers/reports/reports";
import {IUserListItem} from "../../interfaces/IUserListItem";
import * as moment from "moment";
import {IApp} from "../../interfaces/IApp";
import {ISite} from "../../interfaces/ISite";

/**
 * Generated class for the EattimeReportListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eattime-report-list',
  templateUrl: 'eattime-report-list.html',
})
export class EattimeReportListPage implements OnInit {

  public startTime: Date;
  public endTime: Date;
  os: string;
  public users: IUserListItem[];
  public selectedUser: IUserListItem;
  public showData: boolean;

  public apps: IApp[];
  public sites: ISite[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _reports: Reports) {
    this.users = [];
    this.apps = [];
    this.sites = [];
  }

  ngOnInit() {
    this._reports.getUsers().subscribe((data: any) => this.users = data.users);
  }

  loadReport(){
    this.showData = false;
    this._reports.loadReportTime(moment(this.startTime).unix(), moment(this.endTime).unix(), this.selectedUser.id)
      .subscribe((data: any) => {
        this.apps = data.apps;
        this.sites = data.sites;
        this.showData = true;
      })

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EattimeReportListPage');
  }

}
