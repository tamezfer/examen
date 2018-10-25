import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-e',
  templateUrl: 'e.html',
})
export class EPage {

  Canciones = ["1. Bubblegum Bitch",
  "2. Primadonna",
  "3. Lies",
  "4. Homewrecker",
  "5. Starring Role",
  "6. The State of Dreaming",
  "7. Power and control",
  "8. Sex Yeah",
  "9. Teen Idle"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EPage');
  }

}
