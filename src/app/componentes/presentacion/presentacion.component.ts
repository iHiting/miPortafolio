import { Component } from '@angular/core';
import { Presentacion } from 'src/app/Modelos/presentacion';
import { PresentacionService } from 'src/app/Service/presentacion.service';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent {
  presentacion: Presentacion = null
  constructor(public Spresentacion: PresentacionService, private tokenService: TokenService){}

  isLogged = false;
  ngOnInit(): void{
    this.cargarPresentacion()
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

 


  cargarPresentacion(){
    this.Spresentacion.detail(1).subscribe(data =>
      {this.presentacion = data}
    )
  }
}
