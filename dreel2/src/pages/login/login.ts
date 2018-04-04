import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };


  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController){

  }


  // Attempt to login in through our User service
  doLogin() {
    this.navCtrl.push(MainPage);
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
