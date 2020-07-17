import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IslemmerkezleriPageRoutingModule } from './islemmerkezleri-routing.module';

import { IslemmerkezleriPage } from './islemmerkezleri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IslemmerkezleriPageRoutingModule
  ],
  declarations: [IslemmerkezleriPage]
})
export class IslemmerkezleriPageModule {}
