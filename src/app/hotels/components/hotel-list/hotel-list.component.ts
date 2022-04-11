import { Component, Input, OnInit } from '@angular/core';
import { Hotels } from '../../interfaces/Hotels';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  @Input() hotels: Hotels[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
