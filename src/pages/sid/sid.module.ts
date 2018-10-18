import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SidPage } from './sid';

@NgModule({
  declarations: [
    SidPage,
  ],
  imports: [
    IonicPageModule.forChild(SidPage),
  ],
})
export class SidPageModule {}
