import { Component, Input } from '@angular/core';
import { EducacionService } from 'src/app/Service/educacion.service';
import { SExperienciaService } from 'src/app/Service/s-experiencia.service';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.component.html',
  styleUrls: ['./table-info.component.css']
})
export class TableInfoComponent {
 
  
  @Input() headers: string[];
  @Input() objeto: any[];
  @Input() rutaEdit: string;
  @Input() rutaNuevo: string;
  @Input() seccion: string;
  @Input() header: string;
 
  constructor(private tokenService: TokenService, private sExperiencia: SExperienciaService, private educacionS: EducacionService,){ } 
  isLogged = false;
  service: any = null;
  ngOnInit(): void {
   
    if (this.seccion == 'Experiencia') {
      this.cargarExperiencia()
    }else{
      this.cargarEducacion()
    }
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
   
  }

  delete(id?: number){
      if(id != undefined){
        if (this.seccion == 'Experiencia') {
          this.sExperiencia.delete(id).subscribe(
            data => { 
              this.cargarExperiencia()
            }, err =>{
              alert("No se pudo eliminar");
            }
          )
        }else{
            this.educacionS.delete(id).subscribe(
            data => {
              this.cargarEducacion()
            }, err =>{
              alert("No se pudo eliminar");
            }
          )
        
        }
    }
  }

  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(data => {
      this.objeto = data
      this.objeto = this.objeto.map(experiencia => ({
        nombreE: experiencia.nombreE,
        descripcionE: experiencia.descripcionE,
        img: experiencia.img,
        id: experiencia.id
      }));  
     
      ;})

  }

  cargarEducacion(): void{  
    this.educacionS.lista().subscribe(
      data => {
        this.objeto = data;
        this.objeto = this.objeto.map(educacion => ({
          nombreE: educacion.nombreE,
          descripcionE: educacion.descripcionE,
          img: educacion.img,
          id: educacion.id
        }));  
    
      }
    )
}  

}