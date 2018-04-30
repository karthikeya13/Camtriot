import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {SensorViewDetailPage} from '../sensor-view-detail/sensor-view-detail';
/**
 * Generated class for the SensorViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sensor-view',
  templateUrl: 'sensor-view.html',
})
export class SensorViewPage {
items : any[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [];
    this.items.push({
      sensorId: "100254",
      name: "Home",
      syncTime: "5",
      gateway: "Gateway 1256",
      notifications: 2,
      messages: 5,
      battery : 50,
      signal : true,
      warnings: true
    });
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SensorViewPage');
  }

  itemSelected(item){
    console.log(item.name); 
    this.navCtrl.push(SensorViewDetailPage, {item: item});
  }
}
