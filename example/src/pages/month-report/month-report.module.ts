import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonthReportPage } from './month-report';

@NgModule({
  declarations: [
    MonthReportPage,
  ],
  imports: [
    IonicPageModule.forChild(MonthReportPage),
  ],
})
export class MonthReportPageModule {}
