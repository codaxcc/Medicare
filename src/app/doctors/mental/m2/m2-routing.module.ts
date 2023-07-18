import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { M2Page } from './m2.page';

const routes: Routes = [
  {
    path: '',
    component: M2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class M2PageRoutingModule {}
