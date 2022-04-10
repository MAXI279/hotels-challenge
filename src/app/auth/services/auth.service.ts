import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import { Airline } from '../interfaces/Airline';
import { LoginForm } from '../interfaces/LoginForm';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  sendCredentials(loginInfo: LoginForm): Observable<any> {
    console.log(loginInfo)
    return this.http.post(`${environment.url}session.json`, loginInfo)
  }

  getAirlines(): Observable<any> {
    return this.http.get<Airline[]>(`${environment.url}airlines`).pipe(
      map(data => data)
    );
  }
}
