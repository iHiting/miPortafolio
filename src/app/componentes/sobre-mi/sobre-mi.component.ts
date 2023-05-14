import { Component } from '@angular/core';
import { persona } from 'src/app/Modelos/persona.model';
import { ServiceService } from 'src/app/Service/service.service';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent {
  persona: persona = null
  constructor(public personaService: ServiceService, private tokenService: TokenService){}

  isLogged = false;
  ngOnInit(): void{
    this.cargarPersona()
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

 


  cargarPersona(){
    this.personaService.detail(1).subscribe(data =>
      {this.persona = data}
    )
  }

  
}
