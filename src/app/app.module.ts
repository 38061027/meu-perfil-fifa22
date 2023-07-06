import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material/material/material.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ArtilhariasComponent } from './components/artilharias/artilharias.component';

import { EstatisticasComponent } from './components/estatisticas/estatisticas.component';
import { TitulosModule } from './components/titulos/titulos.module';
import { ClubesComponent } from './components/clubes/clubes.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtilhariasComponent,
    PerfilComponent,
    EstatisticasComponent,
    ClubesComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    TitulosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
