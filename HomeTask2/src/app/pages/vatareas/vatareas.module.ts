import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VatareasPageRoutingModule } from './vatareas-routing.module';

import { VatareasPage } from './vatareas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VatareasPageRoutingModule
  ],
  declarations: [VatareasPage]
})
export class VatareasPageModule {}
