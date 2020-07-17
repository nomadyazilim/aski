import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IletisimPage } from './iletisim.page';

const routes: Routes = [
  {
    path: '',
    component: IletisimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IletisimPageRoutingModule {}
