import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import { interval } from 'rxjs/observable/interval';
import {Subject} from "rxjs/Subject";
import {takeUntil} from "rxjs/operators";

@IonicPage()
@Component({
  selector: 'page-tab3',
  templateUrl: 'tab3.html',
})
export class Tab3Page{
  public currentTime;
  public timeFormatted;
  public interval;
  public i = 0;
  public stopInterval: Subject<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentTime = moment().utcOffset(0);
    this.currentTime.set({hour:0,minute:0,second:0,millisecond:0});
    this.currentTime.toISOString();
    this.currentTime.format();
    this.stopInterval = new Subject<any>();
    console.log(this.currentTime.format());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab3Page');
  }

  start() {
    this.interval = interval(1000);

    this.interval.pipe(takeUntil(this.stopInterval)).subscribe(() => {
      this.currentTime.add(1, 'seconds');
      this.timeFormatted = this.currentTime.format("mm:ss");
    });

  }

  stop() {
    this.stopInterval.next();
  }

}
