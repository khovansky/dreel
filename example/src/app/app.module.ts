import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';


import {Tab1Page} from "../pages/tab1/tab1";
import {Tab2Page} from "../pages/tab2/tab2";
import {Tab3Page} from "../pages/tab3/tab3";
import {Tab4Page} from "../pages/tab4/tab4";
import {Tab2DetailPage} from "../pages/tab2-detail/tab2-detail";
import {WelcomePage} from "../pages/welcome/welcome";

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    Tab1Page,
    Tab2Page,
    Tab2DetailPage,
    Tab3Page,
    Tab4Page,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    Tab1Page,
    Tab2Page,
    Tab2DetailPage,
    Tab3Page,
    Tab4Page,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
