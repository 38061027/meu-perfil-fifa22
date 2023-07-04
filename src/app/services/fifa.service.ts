import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Informacao, Titulos } from '../models/info-interface/info.model';

@Injectable({
  providedIn: 'root'
})
export class FifaService {

  baseUrlInfo: string = 'http://localhost:3000/info'
  baseUrlTitulos : string = 'http://localhost:3000/titulos'


  constructor(private http: HttpClient) { }

  getInfo():Observable<Informacao[]>{
    return this.http.get<Informacao[]>(this.baseUrlInfo)
  }

  getTitulos():Observable<Titulos[]>{
    return this.http.get<Titulos[]>(this.baseUrlTitulos)
  }

 

}
