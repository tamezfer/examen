import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SidPage } from '../sid/sid';
import { NPage } from '../n/n';
import { WPage } from '../w/w';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  siddhartha = SidPage;
  Neighbourhood = NPage;
  WipedOut = WPage;

  constructor(public navCtrl: NavController) {

  }

  clickN()
  {
    this.navCtrl.push(this.Neighbourhood)
  }

  clickW()
  {
    this.navCtrl.push(this.WipedOut)
  }



  clickSid()
  {
   this.navCtrl.push(this.siddhartha)
  }

}
