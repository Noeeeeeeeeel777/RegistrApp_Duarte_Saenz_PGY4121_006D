import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/autorizacion.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'profe',
    loadChildren: () => import('./pages/profe/profe.module').then( m => m.ProfePageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'alumno',
    loadChildren: () => import('./pages/alumno/alumno.module').then( m => m.AlumnoPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QrPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'recuperar-contra',
    loadChildren: () => import('./pages/recuperar-contra/recuperar-contra.module').then( m => m.RecuperarContraPageModule)
  },
  {
    path: 'camara',
    loadChildren: () => import('./pages/camara/camara.module').then( m => m.CamaraPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'libros',
    loadChildren: () => import('./pages/libros/libros.module').then( m => m.LibrosPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'info-libros',
    loadChildren: () => import('./pages/info-libros/info-libros.module').then( m => m.InfoLibrosPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'perfil/:id',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'perfil-alumno/:id',
    loadChildren: () => import('./pages/perfil-alumno/perfil-alumno.module').then( m => m.PerfilAlumnoPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'actualizar/:id',
    loadChildren: () => import('./pages/actualizar/actualizar.module').then( m => m.ActualizarPageModule),
    canActivate: [AutorizadoGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
