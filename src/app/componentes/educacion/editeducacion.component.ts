import { Component, ElementRef } from '@angular/core';

import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Educacion } from 'src/app/Modelos/educacion';
import { EducacionService } from 'src/app/Service/educacion.service';
import { ImageService } from 'src/app/Service/image.service';
import { NavigationHomeService } from 'src/app/Service/navigation-home.service';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent {

  
 
  educacion : Educacion = null;

  constructor(
    private educacionS: EducacionService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private navigationService: NavigationHomeService,
    public imageService: ImageService
  ) {

  }

  ngOnInit():void{
    const id = this.activatedRouter.snapshot.params['id'];
   
    this.educacionS.detail(id).subscribe(
      data => {
        this.educacion = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
        
      }
    )

    


  }
    
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
   
   
    this.educacionS.update(id, this.educacion).subscribe(
      data => {
       
        this.navigationService.vueltaHome("educacion")

      }, err => {
        alert("Error al modificar la educación");
        this.navigationService.vueltaHome("educacion")

      }


    )
  }

  uploadImage($event:any): void{
 
    const id = this.activatedRouter.snapshot.params['id'];
 


    const name = "educacion_" + id;
    
    this.imageService.uploadImage($event, name).then(() => {
      this.educacion.img = this.imageService.url;
    });
  }
  
 
}
