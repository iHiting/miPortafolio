import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contacto } from '../Modelos/contacto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  
  constructor(private httpClient : HttpClient) { }
  URL = environment.URL + 'contactos/';

  public lista(): Observable<Contacto[]>{
    return this.httpClient.get<Contacto[]>(this.URL + 'lista');

  }

  public detail(id : number): Observable<Contacto>{
    return this.httpClient.get<Contacto>(this.URL + `detail/${id}`)
  }

  public save(contacto: Contacto): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', contacto);
  }

  public update(id: number, contacto: Contacto): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`,contacto);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
