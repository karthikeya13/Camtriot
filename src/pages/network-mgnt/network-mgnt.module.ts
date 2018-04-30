import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NetworkMgntPage } from './network-mgnt';

@NgModule({
  declarations: [
    NetworkMgntPage,
  ],
  imports: [
    IonicPageModule.forChild(NetworkMgntPage),
  ],
})
export class NetworkMgntPageModule {}
