import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import { Airline } from '../interfaces/Airline';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  sendCredentials(username: string, password: string): Observable<any> {
    const body = {
      username,
      password
    }
    return this.http.post(`${environment.url}/session.json`, body)
  }

  getAirlines(): Observable<any> {
    return this.http.get<Airline[]>(`${environment.url}airlines`).pipe(
      map(data => data)
    );
    // return preguntas.map((pregunta) => Pregunta.fromJson(pregunta));
  }
}
