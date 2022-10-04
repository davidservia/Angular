import { Component } from '@angular/core';

interface Pedidox{
  id:number,
  nombrepedido:string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombrepedido:string="vaper";
  pedidos:Pedidox[]=[];
  id:number=0;

  constructor() {}

  addPedidox(n:string){
    this.pedidos.push({id:this.id++,nombrepedido:n})
    this.nombrepedido="";
  }

  removePedidox(id:number){
    var index = this.pedidos.findIndex(p=>p.id==id);
    if(index>=0){
      this.pedidos.splice(index,1);
    }
  }

}
