import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitulosComponent } from './titulos.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { TitulosRoutingModule } from './titulos-routing.module';


@NgModule({
  declarations: [TitulosComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TitulosRoutingModule
  ],
  exports: [TitulosComponent]
})
export class TitulosModule { }
