import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApicrudService } from 'src/app/servicios/apicrud.service';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage implements OnInit {

  usuario = {
    id:0,
    username:"",
    rut:"",
    correo: "",
    password:"",
    role: false,
    jornada: "",
    asignatura1: "",
    asignatura2: "",
    anioAcademico1:0,
    semestre1:false,
    horasSemanales1:0,
    anioAcademico2:0,
    semestre2:false,
    horasSemanales2:0
    }

  constructor(private apicrud: ApicrudService,
              private router: Router, 
              private alertcontroller: AlertController,
              private menuController: MenuController) { }

  ngOnInit() {
  }

  MostrarMenu(){
    this.menuController.open('first');
  }

  ionViewWillEnter(){
    this.getUsuarioById(this.getIdFromUrl());
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  getUsuarioById(usuarioID:number){
    this.apicrud.BuscarUsuarioId(usuarioID).subscribe(
      (resp:any)=>{                 
        console.log(resp);
        this.usuario={
          id: resp[0].id,
          username: resp[0].username,
          rut: resp[0].rut,
          correo: resp[0].correo,
          password:resp[0].password,
          role:resp[0].role,
          jornada:resp[0].jornada,
          asignatura1: resp[0].asignatura1,
          asignatura2: resp[0].asignatura2,
          anioAcademico1: resp[0].anioAcademico1,
          semestre1: resp[0].semestre1,
          horasSemanales1: resp[0].horasSemanales1,
          anioAcademico2: resp[0].anioAcademico2,
          semestre2: resp[0].semestre2,
          horasSemanales2: resp[0].horasSemanales2
        }
      }
      
    )
  }

  ActualizarUsuario(){
    this.apicrud.ActualizarUsuario(this.usuario).subscribe();
    this.mostrarMensaje();
    this.router.navigateByUrl("/perfil");
  }

  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header: 'Usuario Actualizado ',
      message: 'Su información se ha modificado ' + this.usuario.username,
      buttons: ['OK']
    });
    alerta.present();
  }

}
