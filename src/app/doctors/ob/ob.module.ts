import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObPageRoutingModule } from './ob-routing.module';

import { ObPage } from './ob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObPageRoutingModule
  ],
  declarations: [ObPage]
})
export class ObPageModule {}
