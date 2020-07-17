import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaturasorgulaPage } from './faturasorgula.page';

const routes: Routes = [
  {
    path: '',
    component: FaturasorgulaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaturasorgulaPageRoutingModule {}
