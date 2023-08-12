import { ErrorsInterceptor } from '../interceptors/errors.interceptor';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtilhariasComponent } from './components/artilharias/artilharias.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TitulosComponent } from './components/titulos/titulos.component';
import { RouterModule } from '@angular/router';
import { ClubesComponent } from './components/clubes/clubes.component';

import { MaterialModule } from './material/material.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EstatisticasComponent } from './components/estatisticas/estatisticas.component';


const COMPONENTS = [
  ArtilhariasComponent,
  PerfilComponent,
ToolbarComponent,
  TitulosComponent,
  ClubesComponent,
  EstatisticasComponent

]


@NgModule({
  declarations: [COMPONENTS, EstatisticasComponent],
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
