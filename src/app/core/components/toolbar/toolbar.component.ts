import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  panelOpen = false;


  routersList = [
    {rotas:'/titulos', nome: 'Titulos'},
    {rotas:'/artilharias', nome: 'Artilharias'},
    {rotas:'/estatisticas', nome: 'Estatísticas'},
    {rotas:'/clubes', nome: 'Tranferências'},

  ]

}
