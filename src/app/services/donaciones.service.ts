import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donacion } from '../interfaces/Donacion';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonacionesService {

  urlServices = environment.urlServidor;

  constructor(
    private http: HttpClient
  ) { }

  agregarDonador(donacion: any) {
    return this.http.post(`${this.urlServices}/donaciones`, donacion);
  }
}
