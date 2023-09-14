import { Component, OnInit } from '@angular/core';
import { FifaService } from '../../services/fifa.service';
import { Estatisticas } from 'src/app/models/estatisticas';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.scss']
})
export class EstatisticasComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'numero'];

  statsArr: Estatisticas[]= []


  constructor(private fifaServices:FifaService){ }

  getStats(){
    this.fifaServices.getResults().subscribe(
      res => this.statsArr = res.results[0].estatistica
    )
  }

  ngOnInit(): void {
    this.getStats()
  }



}
