import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/Modelos/contacto';
import { ContactoService } from 'src/app/Service/contacto.service';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  constructor(private router:Router, private contactoS: ContactoService, private tokenService: TokenService){}

  volverHome(){
    this.router.navigate([""])
  }

  contacto: Contacto[] = [];
  


  isLogged = false;

  ngOnInit(): void{
    this.cargarContactos();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
     
    }
  }
  
  cargarContactos(): void{
    this.contactoS.lista().subscribe(
      data => {
        this.contacto = data;
      
      } 
    )
  }

  delete(id: number){
    if(id != undefined){
      this.contactoS.delete(id).subscribe(
        data => {
          this.cargarContactos(); 
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }

    
  irRed(red:string){
    window.open(red, '_blank');
  }
}
