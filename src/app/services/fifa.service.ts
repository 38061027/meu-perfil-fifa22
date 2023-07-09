import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Informacao, Titulos } from '../models/info-interface/info.model';

@Injectable({
  providedIn: 'root'
})
export class FifaService {

  baseUrl: string = 'http://localhost:3000/results'

  constructor(private http: HttpClient) { }

  getResults():Observable<any>{
    return this.http.get<any>(this.baseUrl)
  }


}
