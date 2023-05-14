import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/Service/image.service';
import { ServiceService } from 'src/app/Service/service.service';
import { persona } from 'src/app/Modelos/persona.model';
import { NavigationHomeService } from 'src/app/Service/navigation-home.service';

@Component({
  selector: 'app-edit-sobre-mi',
  templateUrl: './edit-sobre-mi.component.html',
  styleUrls: ['./edit-sobre-mi.component.css']
})
export class EditSobreMiComponent {
  persona: persona = null;

  constructor(private activatedRouter: ActivatedRoute,
    private personaService: ServiceService,
    private router: Router,
    public imageService: ImageService, 
    private navigationService: NavigationHomeService) {}

    ngOnInit(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.personaService.detail(id).subscribe(
        data => {
          this.persona = data;
        }, err => {
          alert("Error al modificar");
          this.router.navigate(['']);
  
        }
      )
    }
  
  
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.persona.img = this.imageService.url
     
      this.personaService.update(id, this.persona).subscribe(
        data => {
          this.navigationService.vueltaHome("perfil")
        }, err => {
          alert("Error al modificar el perfil");
          this.navigationService.vueltaHome("perfil")
        }
  
  
      )
    }

    
  
    uploadImage($event:any){
      const id = this.activatedRouter.snapshot.params['id'];
      const name = "perfil_" + id;
      this.imageService.uploadImage($event, name).then(() => {
        this.persona.img = this.imageService.url;
        
      });
     
    }

 
}
