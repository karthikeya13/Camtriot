import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SensorViewPage } from '../pages/sensor-view/sensor-view';
import { GatewayViewPage } from '../pages/gateway-view/gateway-view';
import { NetworkMgntPage } from '../pages/network-mgnt/network-mgnt';
import { AddDevicePage } from '../pages/add-device/add-device';
import { EventsPage } from '../pages/events/events';
import { ReportsPage } from '../pages/reports/reports';
import { SensorMapsPage } from '../pages/sensor-maps/sensor-maps';

import {SensorViewDetailPage} from '../pages/sensor-view-detail/sensor-view-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SensorViewPage,
    GatewayViewPage,
    NetworkMgntPage,
    AddDevicePage,
    EventsPage,
    ReportsPage,
    SensorMapsPage,
    SensorViewDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SensorViewPage,
    GatewayViewPage,
    NetworkMgntPage,
    AddDevicePage,
    EventsPage,
    ReportsPage,
    SensorMapsPage,
    SensorViewDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
