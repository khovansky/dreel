import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };



  constructor(public navCtrl: NavController, public navParams: NavParams, public user: User) {
      if(this.user.checkAccessToken()){
          this.navCtrl.push(TabsPage);
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin() {
    this.navCtrl.push(TabsPage);
    // this.user.login(this.account).subscribe((resp) => {
    //     if(resp.status === 'error'){
    //         let toast = this.toastCtrl.create({
    //             message: resp.message,
    //             duration: 3000,
    //             position: 'top'
    //         });
    //         toast.present();
    //     }else{
    //         let toast = this.toastCtrl.create({
    //             message: 'Авторизовация прошла успешно',
    //             duration: 3000,
    //             position: 'top'
    //         });
    //         toast.present();
    //         this.navCtrl.push(MainPage);
    //     }
    //   console.log(resp);
    //   // this.navCtrl.push(MainPage);
    // }, () => {});
  }




}
