import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HaberdetayPageRoutingModule } from './haberdetay-routing.module';

import { HaberdetayPage } from './haberdetay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HaberdetayPageRoutingModule
  ],
  declarations: [HaberdetayPage]
})
export class HaberdetayPageModule {}
