import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClipboardService } from "../../shared/services/clipboard.service";

import {Invite} from "../../providers/invite/invite";

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
export class InvitePage implements OnInit {

  // @ViewChild('linkForCopying') link: ElementRef;

  public link: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _clipboardService: ClipboardService,
    public invite: Invite,
  ) {
  }

  ngOnInit() {
    this.invite.getLinks().subscribe((resp: any) => this.link = resp.magic_link);
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
