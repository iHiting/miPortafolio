import { Component } from '@angular/core';
import { Educacion } from 'src/app/Modelos/educacion';
import { EducacionService } from 'src/app/Service/educacion.service';
import { TokenService } from 'src/app/Service/token.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  educacion: Educacion[] = [];
  educacionData: { nombreE: string; descripcionE: string; id: number}[] = []
  constructor(private educacionS: EducacionService, private tokenService: TokenService){}






 
}
