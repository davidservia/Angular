import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('.pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'gpersonas',
    loadChildren: () => import('./pages/gpersonas/gpersonas.module').then( m => m.GpersonasPageModule)
  },
  {
    path: 'gtareas',
    loadChildren: () => import('./pages/gtareas/gtareas.module').then( m => m.GtareasPageModule)
  },
  {
    path: 'atareas',
    loadChildren: () => import('./pages/atareas/atareas.module').then( m => m.AtareasPageModule)
  },
  {
    path: 'vatareas',
    loadChildren: () => import('./pages/vatareas/vatareas.module').then( m => m.VatareasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
