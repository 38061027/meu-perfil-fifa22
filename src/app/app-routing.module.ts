import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitulosComponent } from './components/titulos/titulos.component';
import { ArtilhariasComponent } from './components/artilharias/artilharias.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ClubesComponent } from './components/clubes/clubes.component';


const routes: Routes = [
  {path: 'titulos', loadChildren: () => import('./components/titulos/titulos.module').then(m => m.TitulosModule)},
  {path: 'artilharias', component: ArtilhariasComponent},
  {path: 'clubes', component: ClubesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
