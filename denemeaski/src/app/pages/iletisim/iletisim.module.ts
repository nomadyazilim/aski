import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IletisimPageRoutingModule } from './iletisim-routing.module';

import { IletisimPage } from './iletisim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IletisimPageRoutingModule
  ],
  declarations: [IletisimPage]
})
export class IletisimPageModule {}
