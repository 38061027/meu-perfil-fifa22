import { ErrorsInterceptor } from './../errors.interceptor';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtilhariasComponent } from './components/artilharias/artilharias.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { EstatisticasComponent } from './components/estatisticas/estatisticas.component';
import { TitulosComponent } from './components/titulos/titulos.component';
import { RouterModule } from '@angular/router';
import { ClubesComponent } from './components/clubes/clubes.component';

import { MaterialModule } from './material/material.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


const COMPONENTS = [
  ArtilhariasComponent,
  PerfilComponent,
  EstatisticasComponent,
  TitulosComponent,
  ClubesComponent

]


@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,


  ],
  exports:[COMPONENTS],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorsInterceptor, multi: true }, 
  ],
})
export class CoreModule { }
