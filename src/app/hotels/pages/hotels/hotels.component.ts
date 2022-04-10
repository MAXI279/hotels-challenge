import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HotelsService } from '../../services/hotels.service';


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  minDate: Date
  error: string = ''
  formHotels: FormGroup = new FormGroup({});

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
      this.hotelsService.searchHotels(this.formHotels.value).subscribe(responseOk => {
        console.log(responseOk);
      },
      err => {
        this.error = err.error.error
        console.log(err);
      })
    }else{
      this.error = 'Campos invalidos, por favor revise los datos ingresados'
    }
  }

}
