import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

const MODULES = [
  MatCardModule,
  MatIconModule,
  MatBadgeModule,
  MatExpansionModule,
  MatTableModule,
  MatButtonModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, MODULES],
  exports: [MODULES],
})
export class MaterialModule {}
