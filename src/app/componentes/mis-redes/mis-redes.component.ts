import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-redes',
  templateUrl: './mis-redes.component.html',
  styleUrls: ['./mis-redes.component.css']
})
export class MisRedesComponent {
  constructor(private router:Router){
    
  }


  irContacto(){
    this.router.navigate(["/contacto"])
  }
  
  irRed(red:string){
    location.href=red;
  }
}
