import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-d',
  templateUrl: 'd.html',
})
export class DPage {

  Canciones = ["1. COPYCAT",
  "2. idontwannabeyouanymore",
  "3. my boy",
  "4. watch",
  "5. party favor)",
  "6. bellyache",
  "7. ocean eyes",
  "8. hostage",
  "9. &burn"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DPage');
  }

}
