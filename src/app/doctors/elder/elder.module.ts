import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElderPageRoutingModule } from './elder-routing.module';

import { ElderPage } from './elder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElderPageRoutingModule
  ],
  declarations: [ElderPage]
})
export class ElderPageModule {}
