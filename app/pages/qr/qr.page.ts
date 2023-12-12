import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { IAsistencia } from '../interfaces/interface';
import { ApicrudService } from 'src/app/servicios/apicrud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
  providers: [DatePipe]
})
export class QrPage implements OnInit {

  public seccion: string = '';

  data={
    texto:''
  }

  newAsistencia: IAsistencia={
    username:'',
    hora:'',
    seccion:''
  }

  nombre:any;
  asignatura1: any;
  asignatura2: any;

  constructor(private menuController: MenuController,
              private datePipe: DatePipe,
              private apicrud: ApicrudService,
              private alert: AlertController,
              private router: Router ) {
                this.nombre= sessionStorage.getItem('username');
              }

  ngOnInit() {
  }

  MostrarMenu(){
    this.menuController.open('first');
  }

  generarQr(){
    const fechaActual = new Date();
    const fechaFormateada = this.datePipe.transform(fechaActual, 'dd/MM/yyyy');
    this.seccion = this.data.texto;
    this.newAsistencia.username=this.nombre;
    this.newAsistencia.hora = `Fecha del día: "${fechaFormateada}" `;
    this.newAsistencia.seccion=this.seccion;
    this.apicrud.CrearAsistencia(this.newAsistencia).subscribe();
    this.mostrarMensaje();
    this.data.texto='';
    
  }

  async mostrarMensaje(){
    const alerta = await this.alert.create({ 
      header: 'Asistencia Guardada Correctamente!!!',
      message: 'Su QR ha sido almacenado',
      buttons: ['Ok']
    });
    alerta.present();
  }

}
