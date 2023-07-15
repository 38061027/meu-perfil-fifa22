import { Component, OnInit } from '@angular/core';
import { FifaService } from 'src/app/services/fifa.service';

@Component({
  selector: 'app-clubes',
  templateUrl: './clubes.component.html',
  styleUrls: ['./clubes.component.scss']
})
export class ClubesComponent implements OnInit {

  transferTeams: any[]= []

constructor(private fifaService: FifaService){
}


getTransfer(){
  this.fifaService.getResults().subscribe(res => this.transferTeams = res.results)
}

ngOnInit(): void {
  this.getTransfer()
}

}
