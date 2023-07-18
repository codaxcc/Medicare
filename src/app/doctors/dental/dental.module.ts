import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DentalPageRoutingModule } from './dental-routing.module';

import { DentalPage } from './dental.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DentalPageRoutingModule
  ],
  declarations: [DentalPage]
})
export class DentalPageModule {}
