import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SidPage } from '../sid/sid';
import { NPage } from '../n/n';
import { WPage } from '../w/w';
import { BPage } from '../b/b';
import { ImagNPage } from '../imag-n/imag-n';
import { StarNPage } from '../star-n/star-n';
import { ImagSPage } from '../imag-s/imag-s';
import { UPage } from '../u/u';
import { StarSPage } from '../star-s/star-s';
import { ImagBPage } from '../imag-b/imag-b';
import { DPage } from '../d/d';
import { StarBPage } from '../star-b/star-b';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //The neighbourhood
  Neighbourhood = NPage;
  ImagenN = ImagNPage;
  WipedOut = WPage;
  StarN = StarNPage;
  //Siddhartha
  Siddhartha = SidPage;
  ImagenS = ImagSPage;
  Unicos = UPage;
  StarS = StarSPage;
//Billie Eilish
  Billie = BPage;
  ImagenB = ImagBPage;
  Dont = DPage;
  StarB = StarBPage;

  constructor(public navCtrl: NavController) {

  }
//The Neighbourhood
  clickN()
  {
    this.navCtrl.push(this.Neighbourhood)
  }

  clickImagN()
  {
    this.navCtrl.push(this.ImagenN)
  }

  clickW()
  {
    this.navCtrl.push(this.WipedOut)
  }
  clickStarN()
  {
    this.navCtrl.push(this.StarN)
  }

  //Siddhartha
  clickSid()
  {
   this.navCtrl.push(this.Siddhartha)
  }

  clickU()
  {
    this.navCtrl.push(this.Unicos)
  }

  clickImagS()
  {
    this.navCtrl.push(this.ImagenS)
  }

  clickStarS()
  {
    this.navCtrl.push(this.StarS)
  }

  //Billie Eilish
  clickB()
  {
   this.navCtrl.push(this.Billie)
  }

  clickImagB()
  {
    this.navCtrl.push(this.ImagenB)
  }

  clickD()
  {
    this.navCtrl.push(this.Dont)
  }

  clickStarB()
  {
   this.navCtrl.push(this.StarB)
  }

  

}
