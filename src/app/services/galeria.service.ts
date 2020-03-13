import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  constructor(
    private http: HttpClient
  ) { }

  getGaleria(page: number) {
    return this.http.get(`${environment.urlServidor}/informacion/galeria?page=${page}`);
  }
}
