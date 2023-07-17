import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';


const MODULES = [
  MatCardModule,
  MatIconModule,
  MatBadgeModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   MODULES
  ],
  exports: [MODULES]
})
export class MaterialModule { }
