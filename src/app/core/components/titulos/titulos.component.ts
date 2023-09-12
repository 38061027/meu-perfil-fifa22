import { Component, Input, OnInit } from '@angular/core';
import { FifaService } from '../../services/fifa.service';


@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss'],
})
export class TitulosComponent implements OnInit {
  panelOpenState = false;
  taca: any[] = [];


  constructor(private fifaService: FifaService) {}

  ngOnInit(): void {
    this.getTitulos();

  }

  getTitulos() {
    return this.fifaService.getResults().subscribe((res) => {
      this.taca = res.results;

    });
  }

  ordenarTitulosMaiorParaMenor() {
    this.taca[0]?.titulos.sort((a:any, b:any) => {
      return b.temporadas.length - a.temporadas.length;
    });
  }
  ordenarTitulosMenorParaMaior() {
    this.taca[0]?.titulos.sort((a:any, b:any) => {
      return a.temporadas.length - b.temporadas.length;
    });
  }

}
