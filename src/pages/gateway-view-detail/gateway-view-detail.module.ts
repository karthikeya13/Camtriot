import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GatewayViewDetailPage } from './gateway-view-detail';

@NgModule({
  declarations: [
    GatewayViewDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(GatewayViewDetailPage),
  ],
})
export class GatewayViewDetailPageModule {}
