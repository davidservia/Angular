import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/pages/gpersonas/person/person.component';

@Component({
  selector: 'app-gpersonas',
  templateUrl: './gpersonas.page.html',
  styleUrls: ['./gpersonas.page.scss'],
})
export class GpersonasPage  {

  constructor() { }

  name:string="David";
  people:Person[]=[];
  id:number=0;

  addPerson(_name:string){
    this.people.push({id:this.id++,name:_name});
    this.name="";
  }

  removePerson(id:number){
    var index = this.people.findIndex(p=>p.id==id);
    if(index>=0){
      this.people.splice(index,1);
    }
  }

}
