import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KonumlarPage } from './konumlar.page';

const routes: Routes = [
  {
    path: '',
    component: KonumlarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KonumlarPageRoutingModule {}
