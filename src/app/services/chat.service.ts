import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private http: HttpClient
  ) { }

  getResponse(message: string) {
    console.log('Called server');
    return this.http.post(`${environment.urlServidor}/informacion/chat`, {message});
  }
}
