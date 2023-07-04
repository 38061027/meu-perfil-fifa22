import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitulosComponent } from './components/titulos/titulos.component';
import { ArtilhariasComponent } from './components/artilharias/artilharias.component';

const routes: Routes = [
  {path: 'titulos', component: TitulosComponent},
  {path: 'artilharias', component: ArtilhariasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
