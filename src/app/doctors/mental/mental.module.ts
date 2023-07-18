import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MentalPageRoutingModule } from './mental-routing.module';

import { MentalPage } from './mental.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MentalPageRoutingModule
  ],
  declarations: [MentalPage]
})
export class MentalPageModule {}
