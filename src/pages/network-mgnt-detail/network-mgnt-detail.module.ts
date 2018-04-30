import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NetworkMgntDetailPage } from './network-mgnt-detail';

@NgModule({
  declarations: [
    NetworkMgntDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(NetworkMgntDetailPage),
  ],
})
export class NetworkMgntDetailPageModule {}
