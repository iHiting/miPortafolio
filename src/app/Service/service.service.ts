import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Usuario } from '../Modelos/Usuario';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { persona } from '../Modelos/persona.model';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  createUsuario(usuario: Usuario) {
    throw new Error('Method not implemented.');
  }
  URL = environment.URL + 'personas/';

  constructor(private httpClient:HttpClient) { }
    
  public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.URL + 'lista');

  }

  public detail(id : number): Observable<persona>{
    return this.httpClient.get<persona>(this.URL + `detail/${id}`);
  }

  public update(id: number, Persona: persona): Observable<any>{
    console.log('Sending persona:', Persona);

    return this.httpClient.put<any>(this.URL + `update/${id}`, Persona);
  }



}
