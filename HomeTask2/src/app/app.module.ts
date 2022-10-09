import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GpersonasPipe } from './pages/gpersonas.pipe';
import { GtareasPipe } from './pages/gtareas.pipe';
import { AtareasPipe } from './pages/atareas.pipe';
import { VatareasPipe } from './pages/vatareas.pipe';

@NgModule({
  declarations: [AppComponent, GpersonasPipe, GtareasPipe, AtareasPipe, VatareasPipe],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
