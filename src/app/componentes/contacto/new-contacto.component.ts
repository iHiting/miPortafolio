import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/Modelos/contacto';
import { ContactoService } from 'src/app/Service/contacto.service';
import { ImageService } from 'src/app/Service/image.service';
import { NavigationHomeService } from 'src/app/Service/navigation-home.service';

@Component({
  selector: 'app-new-contacto',
  templateUrl: './new-contacto.component.html',
  styleUrls: ['./new-contacto.component.css']
})
export class NewContactoComponent {
  link: string;


  img: string

  constructor(private contactoS: ContactoService, 
    private router: Router,
    private navigationService: NavigationHomeService,
    public imageService: ImageService,
    private activatedRouter: ActivatedRoute){}


  onCreate(): void{
    
    const contacto = new Contacto(this.link, this.img)
    this.contactoS.save(contacto).subscribe(
      data =>{
        alert("Contacto añadido")
        this.navigationService.vueltaHome("contacto")
      }, err =>{
        alert("Fallo");
        this.navigationService.vueltaHome("contacto")
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
  


    const name = "contactonuevo_" + id;
    console.log(id);


    this.imageService.uploadImage($event, name).then(() => {
      this.img = this.imageService.url;
    });
  }

}
