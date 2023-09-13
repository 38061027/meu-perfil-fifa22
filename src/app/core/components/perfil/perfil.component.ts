import { Component, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { filter } from 'rxjs';
import { FifaService } from '../../services/fifa.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  isArtilhariasRoute: boolean = false;

  @Output() resultsArray: any[] = [];

  constructor(private fifaService: FifaService, private route: Router) {
    this.route.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          this.isArtilhariasRoute =
            event.url.includes('/artilharias') || event.url.includes('/clubes');
        }
      });
  }

  getResults() {
    return this.fifaService.getResults().subscribe((res) => {
      this.resultsArray = res.results;
      this.ordenarTitulo()
    });
  }

  ngOnInit(): void {
    this.getResults();
  }

  ordenarTitulo(){
    this.resultsArray[0].titulos.sort((a:any,b:any)=>{
      return a.peso - b.peso
    })
  }


}
