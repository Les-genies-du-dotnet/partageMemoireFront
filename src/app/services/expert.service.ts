import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expert } from '../models/Expert';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpertService {
  private url="Expert";
  constructor(private httpClient:HttpClient) {}
  getExpertList(): Observable<Expert[]>{
      return this.httpClient.get<Expert[]>(`${environment.apiUrl}/${this.url}`);
  }
  deleteExpert(expert:Expert): Observable<Expert[]>{
    return this.httpClient.delete<Expert[]>(`${environment.apiUrl}/${this.url}/${expert.id}`);
  }
  createExpert(expert:Expert): Observable<Expert[]>{
    return this.httpClient.post<Expert[]>(`${environment.apiUrl}/${this.url}`,
      expert
    );
  }
  // updateExpert(expert:Expert): Observable<Expert[]>{
  //   return this.httpClient.<Expert[]>(`${environment.apiUrl}/${this.url}`);
  // }
}
