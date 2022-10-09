import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GpersonasPageRoutingModule } from './gpersonas-routing.module';

import { GpersonasPage } from './gpersonas.page';
import { PersonComponent } from './person/person.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GpersonasPageRoutingModule
  ],
  declarations: [GpersonasPage, PersonComponent]
})
export class GpersonasPageModule {}

