import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { AlberguesComponent } from './albergues/albergues.component';
import { DonacionComponent } from './donacion/donacion.component';
import { VoluntarioComponent } from './voluntario/voluntario.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NoticiasComponent,
    AlberguesComponent,
    DonacionComponent,
    VoluntarioComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlberguesComponent,
    DonacionComponent,
    NavbarComponent,
    FooterComponent,
    NoticiasComponent,
    MainComponent
  ]
})
export class ComponentsModule { }
