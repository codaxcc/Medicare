import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { M3PageRoutingModule } from './m3-routing.module';

import { M3Page } from './m3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    M3PageRoutingModule
  ],
  declarations: [M3Page]
})
export class M3PageModule {}
