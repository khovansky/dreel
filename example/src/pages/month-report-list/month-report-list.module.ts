import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonthReportListPage } from './month-report-list';

@NgModule({
  declarations: [
    MonthReportListPage,
  ],
  imports: [
    IonicPageModule.forChild(MonthReportListPage),
  ],
})
export class MonthReportListPageModule {}
