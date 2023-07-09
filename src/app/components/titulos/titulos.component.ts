import { Titulos } from 'src/app/models/info-interface/info.model';
import { Component, Input, OnInit } from '@angular/core';
import { FifaService } from 'src/app/services/fifa.service';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit{

  @Input() arr: Titulos[]= [];

  titulos: any[]= []

  constructor (private fifaService: FifaService){}


  getTitulos(){
    return this.arr = this.titulos
  }

  ngOnInit(): void {
    this.getTitulos()
  }

}
