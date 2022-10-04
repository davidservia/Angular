import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';


export interface Pedidox{
  id:number,
  nombrepedido: string
}

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss'],
})
export class PedidosComponent implements OnInit, OnDestroy {

  private _data:Pedidox

  @Output() onremove = new EventEmitter();

  @Input('data') set data(n:Pedidox) {
    this._data = n;
  }

  get data(){
    return this._data;
  }

  constructor() { }
  ngOnDestroy(): void {
    
  }

  ngOnInit() {

  }

  onRemove(){
    this.onremove.next(this.data.id);
  }
}
