import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GatewayViewPage } from './gateway-view';

@NgModule({
  declarations: [
    GatewayViewPage,
  ],
  imports: [
    IonicPageModule.forChild(GatewayViewPage),
  ],
})
export class GatewayViewPageModule {}
