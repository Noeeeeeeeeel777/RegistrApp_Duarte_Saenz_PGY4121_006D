import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  id: any;

  constructor(private menuController: MenuController ) { }

  ngOnInit() {
  }
  MostrarMenu(){
    this.menuController.open('first');
  }

  ionViewWillEnter(){
    this.id = sessionStorage.getItem('id');
  }
}
