import { Component } from '@angular/core';


import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/Modelos/educacion';
import { EducacionService } from 'src/app/Service/educacion.service';
import { ImageService } from 'src/app/Service/image.service';
import { NavigationHomeService } from 'src/app/Service/navigation-home.service';


@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent {

  nombreE: string;

  descripcionE: string;

  img: string

  constructor(private educacionS: EducacionService, 
    private router: Router,
    private navigationService: NavigationHomeService,
    public imageService: ImageService,
    private activatedRouter: ActivatedRoute){}


  onCreate(): void{
    
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.img)
    this.educacionS.save(educacion).subscribe(
      data =>{
        alert("Educacion añadida")
        this.navigationService.vueltaHome("educacion")
      }, err =>{
        alert("Fallo");
        this.navigationService.vueltaHome("educacion")
      }
    )
  }

  vueltaHome() {
    this.router.navigate(['']).then(() => {
      const element = document.getElementById('educacion');
      if (element) {
        element.scrollIntoView();
      }else{
        console.log("Error")
      }
    });
  }


  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    



    const name = "educacionnueva_" + id;
    console.log(id);


    this.imageService.uploadImage($event, name).then(() => {
      this.img = this.imageService.url;
    });
  }

}
