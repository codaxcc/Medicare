import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ob2PageRoutingModule } from './ob2-routing.module';

import { Ob2Page } from './ob2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ob2PageRoutingModule
  ],
  declarations: [Ob2Page]
})
export class Ob2PageModule {}
