import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtareasPageRoutingModule } from './atareas-routing.module';

import { AtareasPage } from './atareas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtareasPageRoutingModule
  ],
  declarations: [AtareasPage]
})
export class AtareasPageModule {}
