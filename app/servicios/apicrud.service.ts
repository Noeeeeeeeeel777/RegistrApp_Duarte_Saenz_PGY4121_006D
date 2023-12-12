import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Users, IUsers } from '../pages/interfaces/interface';
import { Books } from '../pages/interfaces/interface';
import { Asistencia, IAsistencia } from '../pages/interfaces/interface';

@Injectable({
  providedIn: 'root'
})

export class ApicrudService {

  constructor(private httpclient: HttpClient) { }

  CrearUsuario(newUser:IUsers):Observable<IUsers>{
    return this.httpclient.post<Users>(`${environment.apiUrl}/usuario`, newUser);
  }

  GetAllUsers():Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuario`);
  }

  GetUserById(codigo: any):Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuario/?correo=${codigo}`);
  }

  MostrarLibros():Observable<Books>{
    return this.httpclient.get<Books>(`${environment.apiUrl}/libros`);
  }

  IsLogged(){
    return sessionStorage.getItem('username')!=null;
  }

  CrearAsistencia(newAsistencia: IAsistencia): Observable<IAsistencia>{
    return this.httpclient.post<IAsistencia>(`${environment.apiUrl}/asistencias`, newAsistencia);
  }
  
  getRole(){
    return sessionStorage.getItem('role')
  }

  BuscarUsuarioId(id:number):Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuario/?id=${id}`);
  }

  ActualizarUsuario(usuario:any):Observable<Users>{
    return this.httpclient.put<Users>(`${environment.apiUrl}/usuario/${usuario.id}`, usuario);
  }

  

  

}
