import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  panelOpen = false;


  routList = [
    {rota:'/titulos', nome: 'Titulos'},
    {rota:'/artilharias', nome: 'Artilharias'},
    {rota:'/estatisticas', nome: 'Estatísticas'},
    {rota:'/clubes', nome: 'Tranferências'},
    
  ]

}
