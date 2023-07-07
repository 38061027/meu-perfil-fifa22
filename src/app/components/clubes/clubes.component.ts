import { Component, OnInit } from '@angular/core';
import { FifaService } from 'src/app/services/fifa.service';

@Component({
  selector: 'app-clubes',
  templateUrl: './clubes.component.html',
  styleUrls: ['./clubes.component.scss']
})
export class ClubesComponent implements OnInit{

  transferTimes: any[] = []

constructor(private fifaService: FifaService){
}

  getTransfer(){
    return this.fifaService.getTransfer().subscribe(
      res => this.transferTimes = res,

    )
  }

  ngOnInit(): void {
    this.getTransfer()
  }

}
