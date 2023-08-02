import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtilhariasComponent } from './core/components/artilharias/artilharias.component';
import { ClubesComponent } from './core/components/clubes/clubes.component';



const routes: Routes = [

  {path: 'titulos',
  loadChildren: ()=> import('./core/components/titulos/titulos.module').then((m)=> m.TitulosModule)
},
  {path: 'artilharias', component: ArtilhariasComponent},
  {path: 'clubes', component: ClubesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
