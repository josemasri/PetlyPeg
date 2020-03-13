import localeMx from '@angular/common/locales/es-MX';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    HttpClientModule,
    SweetAlert2Module,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: localeMx, useValue: 'es-MX' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
