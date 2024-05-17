import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDispositivoComponent } from './components/add-dispositivo/add-dispositivo.component';
import { ListDispositivoComponent } from './components/list-dispositivo/list-dispositivo.component';
import {FormsModule} from '@angular/forms';
import { ServiceNameService }from '../app/services/service.service'
import{HttpClientModule}from '@angular/common/http';
import { FiltroPipe } from './app/pipes/filtro.pipe'
@NgModule({
  declarations: [
    AppComponent,
    AddDispositivoComponent,
    ListDispositivoComponent,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceNameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
