import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EattimeReportListPage } from './eattime-report-list';

@NgModule({
  declarations: [
    EattimeReportListPage,
  ],
  imports: [
    IonicPageModule.forChild(EattimeReportListPage),
  ],
})
export class EattimeReportListPageModule {}
