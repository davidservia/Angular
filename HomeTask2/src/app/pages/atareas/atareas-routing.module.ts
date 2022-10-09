import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtareasPage } from './atareas.page';

const routes: Routes = [
  {
    path: '',
    component: AtareasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtareasPageRoutingModule {}
