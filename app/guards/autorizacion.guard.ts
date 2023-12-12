import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApicrudService } from '../servicios/apicrud.service';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AutorizadoGuard  {

  constructor(private apicrud:ApicrudService,
              private router: Router,
              private toastcontroller: ToastController){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):

   |Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     if (!this.apicrud.IsLogged())
     {
      this.showToast('Debe iniciar sesión');
      this.router.navigateByUrl("/login");
      return false;
     }
     const rolUsuario = this.apicrud.getRole();
     if (rolUsuario) {
       if (rolUsuario.toLowerCase() === 'estudiante' && (state.url.includes('/inicio') || state.url.includes('/info') || state.url.includes('/libros') || state.url.includes('/camara') || state.url.includes('/alumno') || state.url.includes('/perfil-alumno'))) 
         {
         return true;
         } 
       else if (rolUsuario.toLowerCase() === 'docente' && (state.url.includes('/qr') || state.url.includes('/libros') || state.url.includes('/info') || state.url.includes('/profe') || state.url.includes('/perfil') || state.url.includes('/inicio') || state.url.includes('/actualizar'))) 
         {
         return true;
         }
     }
     this.showToast('Acceso no autorizado');
     if(rolUsuario !== null && rolUsuario !== undefined && rolUsuario.toLowerCase() === 'estudiante'){
       this.router.navigateByUrl('/alumno');
     }
     else if (rolUsuario !== null && rolUsuario !== undefined && rolUsuario.toLowerCase() === 'docente'){
       this.router.navigateByUrl('/profe');
     }
     return false;
  }

  async showToast(msg: any){
    const toast=await this.toastcontroller.create({
      message : msg,
      duration: 3000
    });
    toast.present();
  }
  



}
