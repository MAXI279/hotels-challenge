import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { SharedModule } from '../shared/modules/shared/shared.module';
import { MaterialModule } from '../shared/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';


@NgModule({
  declarations: [
    HotelsComponent,
    HotelListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    HotelsRoutingModule,
    ReactiveFormsModule
  ]
})
export class HotelsModule { }
