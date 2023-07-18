import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimaryPageRoutingModule } from './primary-routing.module';

import { PrimaryPage } from './primary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimaryPageRoutingModule
  ],
  declarations: [PrimaryPage]
})
export class PrimaryPageModule {}
