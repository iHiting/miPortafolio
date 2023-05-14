import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


import { AppRoutingModule } from "./app-routing.module";
import { ContactoComponent } from './componentes/contacto/contacto.component';

import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';


// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HomeComponent } from './componentes/home/home.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';

import { MisCapacidadesComponent } from './componentes/mis-capacidades/mis-capacidades.component';
import { MisRedesComponent } from './componentes/mis-redes/mis-redes.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { PortafolioComponent } from './componentes/portafolio/portafolio.component';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';

import { EditSkillComponent } from './componentes/skills/edit-skill.component';
import { NewSkillComponent } from './componentes/skills/new-skill.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { EditSobreMiComponent } from './componentes/sobre-mi/edit-sobre-mi.component';
import { ImageService } from './Service/image.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { FormEditInfoComponent } from './componentes/form-edit-info/form-edit-info.component';
import { TableInfoComponent } from './componentes/table-info/table-info.component';
import { NewContactoComponent } from './componentes/contacto/new-contacto.component';
import { EditContactoComponent } from './componentes/contacto/edit-contacto.component';
import { EditPresentacionComponent } from './componentes/presentacion/edit-presentacion.component';
import { NewUsuarioComponent } from './componentes/login/new-usuario.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'login',component:LoginComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'nuevaexp/:id', component:NewExperienciaComponent},
  {path: 'editexp/:id', component:EditExperienciaComponent},
  {path: 'nuevaedu/:id', component:NeweducacionComponent},
  {path: 'editedu/:id', component:EditeducacionComponent},
  {path: 'editskill/:id', component:EditSkillComponent},
  {path: 'newskill/:id', component:NewSkillComponent},
  {path: 'editacercade/:id', component:EditSobreMiComponent},
  {path: 'nuevoContacto/:id', component: NewContactoComponent},
  {path :'editcontacto/:id', component: EditContactoComponent},
  {path : 'editpresentacion/:id', component: EditPresentacionComponent},
  {path: 'nuevoUsuario', component: NewUsuarioComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    ContactoComponent,
    NavbarComponent,
    RegistroComponent,
    PortafolioComponent,
    PresentacionComponent,
    SobreMiComponent,
    MisCapacidadesComponent,
    ExperienciaComponent,
    MisRedesComponent,
    SkillsComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EducacionComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    SkillsComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditSobreMiComponent,
    FormEditInfoComponent,
    TableInfoComponent,
    NewContactoComponent,
    EditContactoComponent,
    EditPresentacionComponent,
    NewUsuarioComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
