import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/Modelos/experiencia';
import { ImageService } from 'src/app/Service/image.service';
import { NavigationHomeService } from 'src/app/Service/navigation-home.service';
import { SExperienciaService } from 'src/app/Service/s-experiencia.service';


@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent {
      nombreE: string = '';
      descripcionE: string = '';
      img: string = '';
      constructor(private sExperiencia: SExperienciaService, private router:Router, private navigationService: NavigationHomeService, public imageService: ImageService, private activatedRouter: ActivatedRoute){

      } 

      ngOnInit(): void{

      }

      onCreate(): void{
      
        const expe = new Experiencia(this.nombreE, this.descripcionE, this.img);
        this.sExperiencia.save(expe).subscribe(
          data => {
            alert("experiencia añadida")
            this.navigationService.vueltaHome("experiencia")
        }, err => {
          alert("FALLO");
          this.navigationService.vueltaHome("experiencia");
      }
      )
    }


    uploadImage($event:any){

      const id = this.activatedRouter.snapshot.params['id'];
    

      const name = "experiencianueva_" + id;
      this.imageService.uploadImage($event, name).then(() => {
        this.img = this.imageService.url;
      });
    }
  
 
}
