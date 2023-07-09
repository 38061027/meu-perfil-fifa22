import { Component, OnInit } from '@angular/core';

import { FifaService } from 'src/app/services/fifa.service';

@Component({
  selector: 'app-artilharias',
  templateUrl: './artilharias.component.html',
  styleUrls: ['./artilharias.component.scss']
})
export class ArtilhariasComponent implements OnInit{


  artilharias: any[]=[]

  constructor (private fifaService: FifaService){}



  getArtilharias(){
    return this.fifaService.getResults().subscribe(res => {
      this.artilharias = res;
      console.log(res)

    })
  }

  ngOnInit(): void {
    this.getArtilharias()
  }


}
