import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Componente{
  name: string;
  icon: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  constructor(private router: Router) {}

  componentes : Componente[]=[
    {
      name:'Inicio',
      icon: 'cloudy-night-outline',
      redirecTo:'/inicio'
    },
    {
      name:'Info',
      icon: 'nutrition-outline',
      redirecTo:'/info'
    },
    {
      name:'Registrar Asistencia',
      icon: 'sparkles-outline',
      redirecTo:'/profe'
    },
    {
      name:'Mi Asistencia',
      icon: 'fish-outline',
      redirecTo:'/alumno'
    },
    {
      name:'Exclusivo',
      icon: 'newspaper-outline',
      redirecTo:'/libros'
    }
  ]

}
