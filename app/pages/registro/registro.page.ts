import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { IUsers } from '../interfaces/interface';
import { Router } from '@angular/router';
import { ApicrudService } from 'src/app/servicios/apicrud.service';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  userdata: any;
  
  newUser: IUsers = {
    username:"",
    rut:"",
    correo:"",
    password:"",
    role: false,
    jornada: "",
    asignatura1:"",
    asignatura2:"",
    anioAcademico1:0,
    semestre1:false,
    horasSemanales1:0,
    anioAcademico2:0,
    semestre2:false,
    horasSemanales2:0
  }

  constructor(private builder: FormBuilder,
              private router: Router,
              private toastcontroller: ToastController,
              private apicrud: ApicrudService,
              private navcontroller: NavController) { 
    this.formularioRegistro = this.builder.group({
      'username': new FormControl ("", [Validators.required, Validators.minLength(4)]),
      'rut': new FormControl ("", [Validators.required, Validators.minLength(10)]),
      'correo': new FormControl ("", [Validators.required, Validators.email]),
      'password': new FormControl ("", [Validators.required, Validators.minLength(8)]),
      'role': new FormControl (""),
      'jornada': new FormControl ("", Validators.required),
      'asignatura1': new FormControl ("", Validators.required),
      'asignatura2':  new FormControl ("", Validators.required),
      'anioAcademico1':  new FormControl  ("",[Validators.required, Validators.pattern('^[0-9]{4}$')]),
      'semestre1':  new FormControl (""),
      'horasSemanales1': new FormControl ("", [Validators.required, Validators.min(5)]),
      'anioAcademico2': new FormControl ("", [Validators.required, Validators.pattern('^[0-9]{4}$')]),
      'semestre2': new FormControl (""),
      'horasSemanales2': new FormControl ("", [Validators.required, Validators.min(5)]),
    });
  }

  ngOnInit() {
  }

  crearUsuario(){
    console.log(this.newUser)
    this.newUser.username=this.formularioRegistro.value.username;
    this.newUser.rut=this.formularioRegistro.value.rut;
    this.newUser.correo=this.formularioRegistro.value.correo;
    this.newUser.password=this.formularioRegistro.value.password;
    this.newUser.role=this.formularioRegistro.value.role;
    this.newUser.jornada=this.formularioRegistro.value.jornada;
    this.newUser.asignatura1=this.formularioRegistro.value.asignatura1;
    this.newUser.asignatura2=this.formularioRegistro.value.asignatura2;
    this.newUser.anioAcademico1=this.formularioRegistro.value.anioAcademico1;
    this.newUser.semestre1=this.formularioRegistro.value.semestre1;
    this.newUser.horasSemanales1=this.formularioRegistro.value.horasSemanales1;
    this.newUser.anioAcademico2=this.formularioRegistro.value.anioAcademico2;
    this.newUser.semestre2=this.formularioRegistro.value.semestre2;
    this.newUser.horasSemanales2=this.formularioRegistro.value.horasSemanales2;
    this.apicrud.CrearUsuario(this.newUser).subscribe();
    this.showToast('Usuario creado correctamente');
    this.router.navigateByUrl("/login")
  }

  async showToast(msg: any){
    const toast = await this.toastcontroller.create({
      message:msg,
      duration:3000
    })
    toast.present();
  }


}
