import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SidPage } from '../pages/sid/sid';
import { NPage } from '../pages/n/n';
import { WPage } from '../pages/w/w';
import { BPage } from '../pages/b/b';
import { ImagNPage } from '../pages/imag-n/imag-n';
import { StarNPage } from '../pages/star-n/star-n';
import { ImagSPage } from '../pages/imag-s/imag-s';
import { UPage } from '../pages/u/u';
import { StarSPage } from '../pages/star-s/star-s';
import { ImagBPage } from '../pages/imag-b/imag-b';
import { DPage } from '../pages/d/d';
import { StarBPage } from '../pages/star-b/star-b';
import { MPage } from '../pages/m/m';
import { ImagMPage } from '../pages/imag-m/imag-m';
import { EPage } from '../pages/e/e';
import { StarMPage } from '../pages/star-m/star-m';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SidPage,
    NPage,
    WPage,
    BPage,
    ImagNPage,
    StarNPage,
    ImagSPage,
    UPage,
    StarSPage,
    ImagBPage,
    DPage,
    StarBPage,
    MPage,
    ImagMPage,
    EPage,
    StarMPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SidPage,
    NPage,
    WPage,
    BPage,
    ImagNPage,
    StarNPage,
    ImagSPage,
    UPage,
    StarSPage,
    ImagBPage,
    DPage,
    StarBPage,
    MPage,
    ImagMPage,
    EPage,
    StarMPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
