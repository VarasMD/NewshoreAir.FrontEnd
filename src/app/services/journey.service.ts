import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Journey } from '../models/journey.model';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {
  private apiUrl = 'https://localhost:7019/api/journeys/';

  constructor(private http: HttpClient) {}

  getJourneys(origin: string, destination: string, maxFlights?: number): Observable<Journey[]> {
    let parameter = '';
    if(maxFlights){
      parameter = `?maxFlights=${maxFlights}`;
    }
    const url = `${this.apiUrl}${origin}/${destination}${parameter}`;
    return this.http.get<Journey[]>(url);
  }
}
