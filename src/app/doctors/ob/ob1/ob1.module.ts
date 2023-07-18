import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ob1PageRoutingModule } from './ob1-routing.module';

import { Ob1Page } from './ob1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ob1PageRoutingModule
  ],
  declarations: [Ob1Page]
})
export class Ob1PageModule {}
