import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { M1PageRoutingModule } from './m1-routing.module';

import { M1Page } from './m1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    M1PageRoutingModule
  ],
  declarations: [M1Page]
})
export class M1PageModule {}
