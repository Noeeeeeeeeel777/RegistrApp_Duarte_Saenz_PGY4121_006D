import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private menuController: MenuController,
              private router: Router,
              private toastcontroller: ToastController, ) { }

  ngOnInit() {
  }

  MostrarMenu(){
    this.menuController.open('first');
  }

  getUsernameFromSession() {
    return sessionStorage.getItem('username');
  }

  logout() {
    // Elimina los datos de sesión
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('ingresado');
    this.showToast('Sesion Cerrada');
    // Redirige al usuario a la página de inicio de sesión
    this.router.navigateByUrl("/login");
  }

  async showToast(msg: any){
    const toast = await this.toastcontroller.create({
      message:msg,
      duration:3000
    })
    toast.present();
  }

  
}

