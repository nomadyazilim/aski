import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KonumlarPageRoutingModule } from './konumlar-routing.module';

import { KonumlarPage } from './konumlar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KonumlarPageRoutingModule
  ],
  declarations: [KonumlarPage]
})
export class KonumlarPageModule {}
