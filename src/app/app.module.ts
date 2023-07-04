import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material/material/material.module';
import { EstatisticasComponent } from './components/estatisticas/estatisticas.component';
import { TitulosComponent } from './components/titulos/titulos.component';
import { ArtilhariasComponent } from './components/artilharias/artilharias.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    EstatisticasComponent,
    TitulosComponent,
    ArtilhariasComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
