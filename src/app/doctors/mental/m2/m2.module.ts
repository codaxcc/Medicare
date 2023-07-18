import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { M2PageRoutingModule } from './m2-routing.module';

import { M2Page } from './m2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    M2PageRoutingModule
  ],
  declarations: [M2Page]
})
export class M2PageModule {}
