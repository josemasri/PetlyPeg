import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { AlberguesComponent } from './albergues/albergues.component';
import { DonacionComponent } from './donacion/donacion.component';
import { MainComponent } from './main/main.component';
import { NoticiaComponent, NoticiaDialog } from './noticia/noticia.component';
import { VoluntarioComponent } from './voluntario/voluntario.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ChatComponent } from './chat/chat.component';
import { PipesModule } from '../pipes/pipes.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NoticiasComponent,
    AlberguesComponent,
    DonacionComponent,
    MainComponent,
    NoticiaComponent,
    VoluntarioComponent,
    GaleriaComponent,
    ChatComponent,
    NoticiaDialog
  ],
  imports: [
    CommonModule,
    PipesModule,
    MatDialogModule,
    MatCardModule,
    MatGridListModule,
    FormsModule
  ],
  exports: [
    AlberguesComponent,
    DonacionComponent,
    NavbarComponent,
    FooterComponent,
    NoticiasComponent,
    MainComponent,
    VoluntarioComponent,
    GaleriaComponent,
    ChatComponent
  ]
})
export class ComponentsModule { }
