import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { Usuario } from 'src/app/Modelos/Usuario';
import { ServiceService } from 'src/app/Service/service.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  modelUsuario = new Usuario();
    constructor(private router:Router, private service:ServiceService){}

/*
    Guardar(usuario:Usuario){
      this.service.createUsuario(usuario)
      .subscribe(data=>{
        alert("agregado papu");
        this.router.navigate([""])
      })
    } 

*/
  
}
