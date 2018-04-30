import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SensorViewPage } from './sensor-view';

@NgModule({
  declarations: [
    SensorViewPage,
  ],
  imports: [
    IonicPageModule.forChild(SensorViewPage),
  ],
})
export class SensorViewPageModule {}
