import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SensorMapsPage } from './sensor-maps';

@NgModule({
  declarations: [
    SensorMapsPage,
  ],
  imports: [
    IonicPageModule.forChild(SensorMapsPage),
  ],
})
export class SensorMapsPageModule {}
