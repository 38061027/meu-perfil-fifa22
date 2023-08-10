import { Component, OnInit } from '@angular/core';
import { FifaService } from '../../services/fifa.service';

@Component({
  selector: 'app-clubes',
  templateUrl: './clubes.component.html',
  styleUrls: ['./clubes.component.scss'],
})
export class ClubesComponent implements OnInit {
  transferTeams: any[] = [];

  displayedColumns: string[] = ['temporada', 'origem', 'destino', 'valor'];

  constructor(private fifaService: FifaService) {}

  getTransfer() {
    this.fifaService.getResults().subscribe((res) => {
      console.log(res.results);
      this.transferTeams = res.results;
    });
  }

  ngOnInit(): void {
    this.getTransfer();
  }
}
