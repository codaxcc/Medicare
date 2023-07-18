import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E1PageRoutingModule } from './e1-routing.module';

import { E1Page } from './e1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E1PageRoutingModule
  ],
  declarations: [E1Page]
})
export class E1PageModule {}
