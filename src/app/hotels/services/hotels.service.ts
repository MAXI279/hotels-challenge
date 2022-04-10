import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HotelSearchInterface } from '../interfaces/HotelSearchInterface';
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
      .set("checkin", search.start.toString())
      .set("checkout", search.end.toString())
      .set("guests[]", search.travellers.toString())
      .set("page", search.page ? search.page.toString() : "1");

    return this.http.get<any>(`${environment.api_url}hotels.json`, {params})
  }
}
