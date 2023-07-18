import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E3PageRoutingModule } from './e3-routing.module';

import { E3Page } from './e3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E3PageRoutingModule
  ],
  declarations: [E3Page]
})
export class E3PageModule {}
