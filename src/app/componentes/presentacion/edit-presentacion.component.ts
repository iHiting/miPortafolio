import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Presentacion } from 'src/app/Modelos/presentacion';
import { ImageService } from 'src/app/Service/image.service';
import { NavigationHomeService } from 'src/app/Service/navigation-home.service';
import { PresentacionService } from 'src/app/Service/presentacion.service';

@Component({
  selector: 'app-edit-presentacion',
  templateUrl: './edit-presentacion.component.html',
  styleUrls: ['./edit-presentacion.component.css']
})
export class EditPresentacionComponent {
  presentacion : Presentacion = null;

  constructor(private sPresentacion: PresentacionService, private activatedRouter: ActivatedRoute,
    private router: Router, private navigationService: NavigationHomeService, public imageService: ImageService) {}

  ngOnInit(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPresentacion.detail(id).subscribe(
      data =>{
        this.presentacion = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate([""]);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    
    this.imageService.url = ""
    this.sPresentacion.update(id, this.presentacion).subscribe(
      data =>{
        this.router.navigate([""]);
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate([""]);
      }
    )
    
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "presentacion_" + id;
 
    this.imageService.uploadImage($event, name).then(() => {
      this.presentacion.img = this.imageService.url;
    
    });
  }
}
