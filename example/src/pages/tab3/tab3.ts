import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import { interval } from 'rxjs/observable/interval';
import { Subscription } from 'rxjs/Subscription';
/**
 * Generated class for the Tab3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab3',
  templateUrl: 'tab3.html',
})
export class Tab3Page implements OnInit, OnDestroy {
  public currentTime;
  public timeFormatted;
  public interval;
  public intervalSubscrition: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentTime = moment().utcOffset(0);
    this.currentTime.set({hour:0,minute:0,second:0,millisecond:0});
    this.currentTime.toISOString();
    this.currentTime.format();
    console.log(this.currentTime.format());
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    if (this.intervalSubscrition) {
      this.intervalSubscrition.unsubscribe();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab3Page');
  }
  test() {

  }

  start() {
    this.interval = interval(1000);

    this.intervalSubscrition = this.interval.subscribe(() => {
      this.currentTime.add(1, 'seconds');
      this.timeFormatted = this.currentTime.format();
      console.log(this.timeFormatted);
    });
  }

  stop() {
    this.interval.unsubscribe();
  }

}
