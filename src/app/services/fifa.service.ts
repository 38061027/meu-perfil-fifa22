import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FifaInter } from '../models/info-interface/info.model';

@Injectable({
  providedIn: 'root'
})
export class FifaService {

  baseUrlInfo: string = 'http://localhost:3000/info'
  baseUrlTitulos : string = 'http://localhost:3000/titulos'
  constructor(private http: HttpClient) { }

  getInfo():Observable<FifaInter[]>{
    return this.http.get<FifaInter[]>(this.baseUrlInfo)
  }

  getTitulos():Observable<any[]>{
    return this.http.get<any[]>(this.baseUrlTitulos)
  }

}
