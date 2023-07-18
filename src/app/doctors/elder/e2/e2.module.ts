import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E2PageRoutingModule } from './e2-routing.module';

import { E2Page } from './e2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E2PageRoutingModule
  ],
  declarations: [E2Page]
})
export class E2PageModule {}
