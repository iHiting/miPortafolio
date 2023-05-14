import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../Modelos/Usuario';
import { persona } from '../Modelos/persona.model';
import { Presentacion } from '../Modelos/presentacion';

@Injectable({
  providedIn: 'root'
})
export class PresentacionService {
  URL = environment.URL + 'presentacion/';

  constructor(private httpClient:HttpClient) { }

  createUsuario(usuario: Usuario) {
    throw new Error('Method not implemented.');
  }


    
  public lista(): Observable<Presentacion[]>{
    return this.httpClient.get<Presentacion[]>(this.URL + 'lista');

  }

  public detail(id : number): Observable<Presentacion>{
    return this.httpClient.get<Presentacion>(this.URL + `detail/${id}`);
  }

  public update(id: number, presentacion: Presentacion): Observable<any>{
    console.log('Sending persona:', presentacion);

    return this.httpClient.put<any>(this.URL + `update/${id}`, presentacion);
  }
}
