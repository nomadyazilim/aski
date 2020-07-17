import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HaberdetayPage } from './haberdetay.page';

const routes: Routes = [
  {
    path: '',
    component: HaberdetayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HaberdetayPageRoutingModule {}
