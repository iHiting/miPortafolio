import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/Modelos/nuevo-usuario';
import { AuthService } from 'src/app/Service/auth.service';
import { NavigationHomeService } from 'src/app/Service/navigation-home.service';

@Component({
  selector: 'app-new-usuario',
  templateUrl: './new-usuario.component.html',
  styleUrls: ['./new-usuario.component.css']
})
export class NewUsuarioComponent {
  nombreUsuario: string;
  nombre: string;
  email: string;
  password: string;
  roles: string[];

  

  constructor(private authService: AuthService, 
    private router: Router,
    private navigationService: NavigationHomeService,
    private activatedRouter: ActivatedRoute){}


  onCreate(): void{
    this.roles = ["ROLE_ADMIN"]
    const nuevoUsuario = new NuevoUsuario(this.nombreUsuario, this.nombre, this.email, this.password, this.roles)
    console.log(nuevoUsuario)
    this.authService.nuevo(nuevoUsuario).subscribe(
      data =>{
        alert("Usuario añadido")
        this.router.navigate([''])
      }, err =>{
        alert("Fallo");
        this.router.navigate([''])
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


}
