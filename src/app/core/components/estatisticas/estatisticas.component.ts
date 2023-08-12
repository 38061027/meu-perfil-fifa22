import { Component, OnInit } from '@angular/core';
import { FifaService } from '../../services/fifa.service';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.scss']
})
export class EstatisticasComponent implements OnInit {

  displayedColumns: string[] = ['item', 'cost'];

  statsArr: any[]= []


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
