import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-w',
  templateUrl: 'w.html',
})
export class WPage {

  Canciones = ["1. Moment of Silence (0:30)",
  "2. Prey (4:43)",
  "3. Crybaby (3:55)",
  "4. Wiped Out! (6:13)",
  "5. The Beach (4:15)",
  "6. Daddy Issues (4:20)",
  "7. Baby came home 2/Valentines (6:31)",
  "8. Baby came home 2/Valentines (6:31)",
  "9. Greetings from Califournia (4:04)",
  "10. Ferrari (3:04)",
  "11. Single (4:22)",
  "12. R.I.P. 2 My Youth (3:25)"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WPage');
  }

}
