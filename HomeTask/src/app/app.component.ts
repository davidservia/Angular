import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Inbox', icon: 'Home' },
    { title: 'Gestion de Personas', url: '/gpersonas', icon: 'Person' },
    { title: 'Gestion de Tareas', url: '/gtareas', icon: 'server' },
    { title: 'Asignar Tareas', url: '/atareas', icon: 'archive' },
    { title: 'Ver Tareas Asignadas', url: '/vatareas', icon: 'reader' },
  ];
  public labels: any
  constructor() {}
}
