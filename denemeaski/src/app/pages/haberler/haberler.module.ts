import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HaberlerPageRoutingModule } from './haberler-routing.module';

import { HaberlerPage } from './haberler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HaberlerPageRoutingModule
  ],
  declarations: [HaberlerPage]
})
export class HaberlerPageModule {}
