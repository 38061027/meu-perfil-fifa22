import { Titulos } from 'src/app/models/info-interface/info.model';
import { Component, Input, OnInit } from '@angular/core';
import { FifaService } from 'src/app/services/fifa.service';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit{



taca: any[]= []


  constructor (private fifaService: FifaService){}


  ngOnInit(): void {
    this.getTitulos()
  }


  getTitulos(){
    return this.fifaService.getResults().subscribe(res => {
      this.taca = res


    })
  }

}
