import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SensorViewDetailPage } from './sensor-view-detail';

@NgModule({
  declarations: [
    SensorViewDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SensorViewDetailPage),
  ],
})
export class SensorViewDetailPageModule {}
