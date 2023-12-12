import { Component, OnInit } from '@angular/core';
import { ApicrudService } from 'src/app/servicios/apicrud.service';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  userdata: any;
  
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
              private toastcontroller: ToastController,
              private builder: FormBuilder) {
              this.loginForm = this.builder.group({
                  'correo' : new FormControl("", [Validators.required, Validators.minLength(10)]),
                  'password' : new FormControl("", [Validators.required, Validators.minLength(8)])
                })
               }

  ngOnInit() {
  }

  login(){
    console.log("Codificando Login");
    if (this.loginForm.valid){
      this.apicrud.GetUserById(this.loginForm.value.correo).subscribe(resp=>{
        this.userdata=resp;
        if (this.userdata.length>0){
          this.usuario = {
            id: this.userdata[0].id,
            username: this.userdata[0].username,
            rut: this.userdata[0].rut,
            correo: this.userdata[0].correo,
            password: this.userdata[0].password,
            role: this.userdata[0].role,
            jornada: this.userdata[0].jornada,
            asignatura1: this.userdata[0].asignatura1,
            asignatura2: this.userdata[0].asignatura2,
            anioAcademico1: this.userdata[0].anioAcademico1,
            semestre1: this.userdata[0].semestre1,
            horasSemanales1: this.userdata[0].horasSemanales1,
            anioAcademico2: this.userdata[0].anioAcademico2,
            semestre2: this.userdata[0].semestre2,
            horasSemanales2: this.userdata[0].horasSemanales2
          }
          if(this.usuario.password === this.loginForm.value.password){
            sessionStorage.setItem('username', this.usuario.username);
            sessionStorage.setItem('role', this.usuario.role.toString());
            sessionStorage.setItem('ingresado', 'true');
            this.showToast('Sesion Iniciada');
            this.router.navigateByUrl("/inicio");
        } else {
            // La contraseña no coincide, mostrar una alerta
            this.showIncorrectPasswordAlert();
          }
        } else {
          // El usuario no existe, mostrar una alerta
          this.showUserNotFoundErrorAlert();
        }
      })
    }
  }

  async showToast(msg: any){
    const toast = await this.toastcontroller.create({
      message:msg,
      duration:3000
    })
    toast.present();
  }

  async showUserNotFoundErrorAlert() {
    const alert = await this.alertcontroller.create({
      header: 'Usuario no encontrado',
      message: 'El usuario ingresado no existe. Por favor, verifique sus credenciales.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async showIncorrectPasswordAlert() {
    const alert = await this.alertcontroller.create({
      header: 'Contraseña incorrecta',
      message: 'La contraseña ingresada no es válida. Por favor, verifique sus credenciales.',
      buttons: ['OK']
    });
  
    await alert.present();
  }

}
