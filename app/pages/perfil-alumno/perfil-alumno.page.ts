import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApicrudService } from 'src/app/servicios/apicrud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.page.html',
  styleUrls: ['./perfil-alumno.page.scss'],
})
export class PerfilAlumnoPage implements OnInit {

  user = {
    id:0,
    username:"",
    rut:"",
    correo: "",
    password:"",
    role:false,
    jornada:"",
    asignatura1: "",
    asignatura2: "",
    anioAcademico1:0,
    semestre1:false,
    horasSemanales1:0,
    anioAcademico2:0,
    semestre2:false,
    horasSemanales2:0
  }

  constructor(private menu: MenuController,
              private apicrud: ApicrudService,
              private router: Router) { }

  ngOnInit() {
  }

  MostrarMenu(){
    this.menu.open('first');
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

  getUsuarioById(numberID:number){
    this.apicrud.BuscarUsuarioId(numberID).subscribe(
      (resp:any)=>{                 //resp llega en formato de arreglo de un objeto 
        this.user={
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

}