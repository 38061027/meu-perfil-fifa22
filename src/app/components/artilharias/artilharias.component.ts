import { Component, OnInit } from '@angular/core';

import { FifaService } from 'src/app/services/fifa.service';

@Component({
  selector: 'app-artilharias',
  templateUrl: './artilharias.component.html',
  styleUrls: ['./artilharias.component.scss']
})
export class ArtilhariasComponent implements OnInit{

  estatisticasList: any[]= []


  constructor (private fifaService: FifaService){}




  getEstatistica(){
    return this.fifaService.getTitulos().subscribe( res =>{
      this.estatisticasList = res
    }
    )
    }

    ngOnInit(): void {
      this.getEstatistica()
    }

}
