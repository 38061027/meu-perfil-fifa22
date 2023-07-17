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

  img: string = 'src/assets/img/foto-perfil.png'
 @Output() resultsArray: any[]= [];




constructor(private fifaService: FifaService,
  private route: Router){
    this.route.events
    .pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isArtilhariasRoute = event.url === '/artilharias' || event.url === '/clubes';
      }
    });

  }


getResults(){
  return this.fifaService.getResults().subscribe(res => {
    this.resultsArray = res.results

  })
}



ngOnInit(): void {
  this.getResults()


}

}
