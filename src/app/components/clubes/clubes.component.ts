import { Component, OnInit } from '@angular/core';
import { FifaService } from 'src/app/services/fifa.service';

@Component({
  selector: 'app-clubes',
  templateUrl: './clubes.component.html',
  styleUrls: ['./clubes.component.scss']
})
export class ClubesComponent {



constructor(private fifaService: FifaService){
}

}
