import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
 
  {
    path: 'iletisim',
    loadChildren: () => import('./pages/iletisim/iletisim.module').then( m => m.IletisimPageModule)
  },
  {
    path: 'islemmerkezleri',
    loadChildren: () => import('./pages/islemmerkezleri/islemmerkezleri.module').then( m => m.IslemmerkezleriPageModule)
  },
  {
    path: 'sukesintileri',
    loadChildren: () => import('./pages/sukesintileri/sukesintileri.module').then( m => m.SukesintileriPageModule)
  },
  {
    path: 'faturasorgula',
    loadChildren: () => import('./pages/faturasorgula/faturasorgula.module').then( m => m.FaturasorgulaPageModule)
  },
  {
    path: 'haberler',
    loadChildren: () => import('./pages/haberler/haberler.module').then( m => m.HaberlerPageModule)
  },
  {
    path: 'haberdetay',
    loadChildren: () => import('./pages/haberdetay/haberdetay.module').then( m => m.HaberdetayPageModule)
  },
  {
    path: 'konumlar',
    loadChildren: () => import('./pages/konumlar/konumlar.module').then( m => m.KonumlarPageModule)
  },
 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
