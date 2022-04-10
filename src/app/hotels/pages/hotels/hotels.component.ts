import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  minDate: Date
  error: string = ''
  formHotels: FormGroup = new FormGroup({});

  constructor() {
    this.minDate = new Date();
  }

  ngOnInit(): void {
    this.formHotels = new FormGroup(
      {
        destination: new FormControl('', [
          Validators.required
        ]),
        travellers: new FormControl('', [
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
      console.log(this.formHotels.value)
    }else{
      console.log('Errores')
    }
  }

}
