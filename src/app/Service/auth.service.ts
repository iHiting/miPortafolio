import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NuevoUsuario } from '../Modelos/nuevo-usuario';
import { LoginUsuario } from '../Modelos/login-usuario';
import { JwtDto } from '../Modelos/jwt-dto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = environment.URL + 'auth/';

  constructor(private httpClient: HttpClient) { }
  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);

  } 

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    console.log(this.authURL)
    console.log(this.authURL)
    console.log(this.authURL)
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario)
  }
}
