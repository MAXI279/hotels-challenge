import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HotelsService } from '../../services/hotels.service';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';
import { HotelSearchInterface } from '../../interfaces/HotelSearchInterface';

const moment = _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM/DD',
  },
  display: {
    dateInput: 'YYYY/MM/DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class HotelsComponent implements OnInit {

  minDate: Date
  error: string = ''
  formHotels: FormGroup = new FormGroup({});
  loading: boolean = false
  hotels: any[] = []

  get travellers(){
    return this.formHotels.get('travellers')
  }

  constructor(private hotelsService: HotelsService) {
    this.minDate = new Date();
  }

  ngOnInit(): void {
    this.formHotels = new FormGroup(
      {
        destination: new FormControl('', [
          Validators.required
        ]),
        travellers: new FormControl(1, [
          Validators.required,
          Validators.min(1),
          Validators.max(4)
        ]),
        start: new FormControl('', [
            Validators.required
        ]),
        end: new FormControl('', [
          Validators.required
        ]),
      }
    )
  }

  searchHotels(): void {
    if(this.formHotels.valid){
      this.error = ''
      this.loading = true

      this.hotelsService.searchHotels(this.formHotels.value).subscribe({
        next: responseOk => {
          this.hotels = responseOk
          this.loading = false
        },
        error: err => {
          this.error = err.error.error
          this.loading = false
          console.log(err);
        }
      })
    }else{
      this.error = 'Campos invalidos, por favor revise los datos ingresados'
    }
  }

}
