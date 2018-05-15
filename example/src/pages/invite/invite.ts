import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClipboardService } from "../../shared/services/clipboard.service";

/**
 * Generated class for the InvitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invite',
  templateUrl: 'invite.html',
})
export class InvitePage {

  // @ViewChild('linkForCopying') link: ElementRef;

  public link: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _clipboardService: ClipboardService
  ) {
    this.link = 'http://auth.dreel.ru/invite/redline';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitePage');
  }

  async copy() {
    console.log(this.link);
    try {
      await this._clipboardService.copy(this.link)
    } catch(e) {
      console.log(e);
    }
  }

}
