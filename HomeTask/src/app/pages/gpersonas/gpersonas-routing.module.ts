import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GpersonasPage } from './gpersonas.page';

const routes: Routes = [
  {
    path: '',
    component: GpersonasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GpersonasPageRoutingModule {}
