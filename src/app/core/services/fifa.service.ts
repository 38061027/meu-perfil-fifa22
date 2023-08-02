
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FifaService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl
  }

  getResults():Observable<any>{
    return this.http.get<any>(this.baseUrl)
  }


}
