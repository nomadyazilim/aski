import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaturasorgulaPageRoutingModule } from './faturasorgula-routing.module';

import { FaturasorgulaPage } from './faturasorgula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaturasorgulaPageRoutingModule
  ],
  declarations: [FaturasorgulaPage]
})
export class FaturasorgulaPageModule {}
