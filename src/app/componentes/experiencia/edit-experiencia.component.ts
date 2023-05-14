import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/Modelos/experiencia';
import { ImageService } from 'src/app/Service/image.service';
import { NavigationHomeService } from 'src/app/Service/navigation-home.service';
import { SExperienciaService } from 'src/app/Service/s-experiencia.service';


@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent {
  expLab : Experiencia = null;

  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute,
    private router: Router, private navigationService: NavigationHomeService, public imageService: ImageService) {}

  ngOnInit(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data =>{
        this.expLab = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate([""]);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    
    this.imageService.url = ""
    this.sExperiencia.update(id, this.expLab).subscribe(
      data =>{
        this.navigationService.vueltaHome("experiencia");
      }, err =>{
        alert("Error al modificar experiencia");
        this.navigationService.vueltaHome("experiencia");
      }
    )
    
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "experiencia_" + id;
 
    this.imageService.uploadImage($event, name).then(() => {
      this.expLab.img = this.imageService.url;
    
    });
  }

  

}
