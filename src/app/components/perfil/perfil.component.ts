import { Component, OnInit } from '@angular/core';
import { FifaInter } from 'src/app/models/info-interface/info.model';
import { FifaService } from 'src/app/services/fifa.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit{

  infos: FifaInter[] = []
  titulos: any[] = []

constructor(private fifaService: FifaService){}

getInfo(){
  return this.fifaService.getInfo().subscribe(res => this.infos = res)
}

getTitulos(){
  return this.fifaService.getTitulos().subscribe(res => {
    this.titulos = res
  })
}


ngOnInit(): void {
  this.getInfo()
  this.getTitulos()


}

}
