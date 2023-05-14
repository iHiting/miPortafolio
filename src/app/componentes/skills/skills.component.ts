import { Component } from '@angular/core';
import { Skill } from 'src/app/Modelos/skill';
import { SkillService } from 'src/app/Service/skill.service';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skill: Skill[] = [];
  
  constructor(private skillS: SkillService, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void{
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
     
    }
  }
  
  cargarSkills(): void{
    this.skillS.lista().subscribe(
      data => {
        this.skill = data;
        
      } 
    )
  }

  delete(id: number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(
        data => {
          this.cargarSkills(); 
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }
}