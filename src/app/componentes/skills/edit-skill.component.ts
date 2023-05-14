import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/Modelos/skill';
import { ImageService } from 'src/app/Service/image.service';
import { NavigationHomeService } from 'src/app/Service/navigation-home.service';
import { SkillService } from 'src/app/Service/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent {
  skill: Skill = null;

  constructor(
    private skillS: SkillService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private navigationService: NavigationHomeService,
    public imageService: ImageService) { }
   

  ngOnInit(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.details(id).subscribe(
      data => {
        this.skill = data;
      }, err => {
        alert("Error al modificar")
        this.router.navigate(['']); 
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.update(id, this.skill).subscribe(
      data => {
        this.navigationService.vueltaHome("skills")
      }, err => {
        alert('error al modificar la skill')
        this.navigationService.vueltaHome("skills")
      }
    )
  }

  uploadImage($event:any): void{
 
    const id = this.activatedRouter.snapshot.params['id'];
 


    const name = "skill_" + id;
    
    this.imageService.uploadImage($event, name).then(() => {
      this.skill.img = this.imageService.url;
    });
  }
  
}
