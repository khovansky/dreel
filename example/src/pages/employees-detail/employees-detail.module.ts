import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeesDetailPage } from './employees-detail';

@NgModule({
  declarations: [
    EmployeesDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(EmployeesDetailPage),
  ],
})
export class EmployeesDetailPageModule {}
