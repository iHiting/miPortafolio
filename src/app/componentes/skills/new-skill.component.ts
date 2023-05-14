import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/Modelos/skill';
import { ImageService } from 'src/app/Service/image.service';
import { NavigationHomeService } from 'src/app/Service/navigation-home.service';
import { SkillService } from 'src/app/Service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent {
  nombre: string;
  porcentaje: number;
  img: string;
  constructor(private skillS: SkillService, 
    private router: Router, 
    private navigationService: NavigationHomeService,
    private activatedRouter: ActivatedRoute,
    public imageService: ImageService){}

  onCreate(): void{
    const skill = new Skill(this.nombre, this.porcentaje, this.img);
    this.skillS.save(skill).subscribe(
      data => {
        alert("Skill creado correctamente");
        this.navigationService.vueltaHome("skills")

      }, err => {
        alert("fallo al añadir la skill")
        this.navigationService.vueltaHome("skills")
      }
    )
  }

  uploadImage($event:any): void{
 
    const id = this.activatedRouter.snapshot.params['id'];
    


    const name = "skillnueva_" + id;
    
    this.imageService.uploadImage($event, name).then(() => {
      this.img = this.imageService.url;
      
    });
  }
  
}
