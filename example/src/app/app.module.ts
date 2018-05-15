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


import {Projects} from "../providers/projects/projects";
import {Api} from "../providers/api/api";
import {User} from "../providers/user/user";
import {EmployeesPage} from "../pages/employees/employees";
import {Employees} from "../providers/employees/employees";
import {EmployeesDetailPage} from "../pages/employees-detail/employees-detail";
import {Tab1s} from "../providers/tab1/tab1s";
import {ReportPage} from "../pages/report/report";
import {InvitePage} from "../pages/invite/invite";
import {ClipboardService} from "../shared/services/clipboard.service";


@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    Tab1Page,
    Tab2Page,
    Tab2DetailPage,
    Tab3Page,
    Tab4Page,
    EmployeesPage,
    EmployeesDetailPage,
    ReportPage,
    InvitePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
    EmployeesPage,
    EmployeesDetailPage,
    ReportPage,
    InvitePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Api,
    User,
    Projects,
    Employees,
    Tab1s,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClipboardService
  ]
})
export class AppModule {}
