import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PillartimeReportListPage } from './pillartime-report-list';

@NgModule({
  declarations: [
    PillartimeReportListPage,
  ],
  imports: [
    IonicPageModule.forChild(PillartimeReportListPage),
  ],
})
export class PillartimeReportListPageModule {}
