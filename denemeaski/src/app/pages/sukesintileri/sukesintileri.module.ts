import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SukesintileriPageRoutingModule } from './sukesintileri-routing.module';

import { SukesintileriPage } from './sukesintileri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SukesintileriPageRoutingModule
  ],
  declarations: [SukesintileriPage]
})
export class SukesintileriPageModule {}
