import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GpersonasPageRoutingModule } from './gpersonas-routing.module';
import { PersonComponentModule } from './person/person.module';
import { GpersonasPage } from './gpersonas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GpersonasPageRoutingModule,
    PersonComponentModule
  ],
  declarations: [GpersonasPage]
})
export class GpersonasPageModule {}

