import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Noticia } from '../../interfaces/Noticia';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  noticias: Noticia[];
  pagina = 0;

  constructor(
    public noticiasService: NoticiasService
  ) { }

  async ngOnInit() {
    await this.noticiasService.getNoticias(this.pagina)
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError((err: any) => {
          throw err;
        })
      )
      .subscribe(res => {
        this.noticias = res.noticias;
        this.noticias.forEach(noticia => {
          noticia.fecha = new Date(noticia.fecha);
        });
      });
  }

}
