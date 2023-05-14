import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/Modelos/contacto';
import { ContactoService } from 'src/app/Service/contacto.service';
import { ImageService } from 'src/app/Service/image.service';
import { NavigationHomeService } from 'src/app/Service/navigation-home.service';

@Component({
  selector: 'app-edit-contacto',
  templateUrl: './edit-contacto.component.html',
  styleUrls: ['./edit-contacto.component.css']
})
export class EditContactoComponent {
  contacto: Contacto = null;

  constructor(
    private contactoS: ContactoService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private navigationService: NavigationHomeService,
    public imageService: ImageService) { }
   

  ngOnInit(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.contactoS.detail(id).subscribe(
      data => {
        this.contacto = data;
      }, err => {
        alert("Error al modificar")
        this.router.navigate(['']); 
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.contactoS.update(id, this.contacto).subscribe(
      data => {
        this.navigationService.vueltaHome("contacto")
      }, err => {
        alert('error al modificar la skill')
        this.navigationService.vueltaHome("contacto")
      }
    )
  }

  uploadImage($event:any): void{
 
    const id = this.activatedRouter.snapshot.params['id'];
 


    const name = "editcontacto_" + id;
    
    this.imageService.uploadImage($event, name).then(() => {
      this.contacto.img = this.imageService.url;
    });
  }
}
