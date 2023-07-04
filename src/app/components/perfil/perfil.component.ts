import { Component, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { filter } from 'rxjs';
import { Informacao, Titulos } from 'src/app/models/info-interface/info.model';
import { FifaService } from 'src/app/services/fifa.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit{
  isArtilhariasRoute: boolean = false;
  infos: Informacao[] = []
 @Output() titulos: Titulos[] = []



constructor(private fifaService: FifaService,
  private route: Router){
    this.route.events
    .pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isArtilhariasRoute = event.url === '/artilharias';
      }
    });
   
  }
  

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
