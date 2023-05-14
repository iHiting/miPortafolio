import { Component } from '@angular/core';
import { Experiencia } from 'src/app/Modelos/experiencia';
import { SExperienciaService } from 'src/app/Service/s-experiencia.service';
import { TokenService } from 'src/app/Service/token.service';




@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  expe: Experiencia[] = [];
 
  experienciaData: { nombreE: string; descripcionE: string; id: number}[] = [];
  
  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }
 
  
 


  
} 
