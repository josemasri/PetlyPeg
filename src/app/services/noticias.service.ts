import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResNoticias } from '../interfaces/Noticia';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(
    private http: HttpClient
  ) { }

  getNoticias(pagina: number = 0) {
    return this.http.get<ResNoticias>(`${environment.urlServidor}/informacion/noticias?page=${pagina}`);
  }
}
