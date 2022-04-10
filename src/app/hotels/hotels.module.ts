import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { SharedModule } from '../shared/modules/shared/shared.module';
import { MaterialModule } from '../shared/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HotelsComponent
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
