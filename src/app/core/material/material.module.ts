import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';

const MODULES = [
  MatCardModule,
  MatIconModule,
  MatBadgeModule,
  MatExpansionModule,
  MatTableModule
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
