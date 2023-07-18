import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ob3PageRoutingModule } from './ob3-routing.module';

import { Ob3Page } from './ob3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ob3PageRoutingModule
  ],
  declarations: [Ob3Page]
})
export class Ob3PageModule {}
