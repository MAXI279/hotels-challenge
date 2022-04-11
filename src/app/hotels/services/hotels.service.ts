import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import { HotelSearchInterface } from '../interfaces/HotelSearchInterface';
import * as moment from 'moment';
import { Hotels } from '../interfaces/Hotels';
import { ResHotels } from '../interfaces/ResHotels';
@Injectable({
  providedIn: 'root'
})

export class HotelsService {

  constructor(
    private http: HttpClient
  ) { }

  searchHotels(search: HotelSearchInterface): Observable<any> {
    const params = new HttpParams()
      .set("destination", search.destination)
      .set("checkin", moment(search.start).format("YYYY-MM-DD").toString())
      .set("checkout", moment(search.end).format("YYYY-MM-DD").toString())
      .set("guests[]", search.travellers.toString())
      .set("page", search.page ? search.page.toString() : "1");

    return this.http.get<ResHotels>(`${environment.api_url}hotels.json`, {params}).pipe(
      map(data => data.hotels)
    );
  }
}
