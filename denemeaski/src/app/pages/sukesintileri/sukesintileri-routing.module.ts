import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SukesintileriPage } from './sukesintileri.page';

const routes: Routes = [
  {
    path: '',
    component: SukesintileriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SukesintileriPageRoutingModule {}
