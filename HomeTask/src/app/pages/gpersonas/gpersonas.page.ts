import { Component, OnInit } from '@angular/core';
import { DataService, Person } from './services/data.service';

@Component({
  selector: 'app-gpersonas',
  templateUrl: './gpersonas.page.html',
  styleUrls: ['./gpersonas.page.scss'],
})
export class GpersonasPage  {

  constructor(private data: DataService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getPersons(): Person[] {
    return this.data.getPersons();
  }

}
