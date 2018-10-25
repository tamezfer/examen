import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-u',
  templateUrl: 'u.html',
})
export class UPage {
  
  Canciones = ["1. Ser Parte",
  "2. Tarde",
  "3. Camuflaje",
  "4. Cámara",
  "5. Una Noche Tranquila",
  "6. Tus Pupilas",
  "7. A la Distancia",
  "8. Únicos",
  "9. Imán",
  "10. El Chico"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UPage');
  }

}
