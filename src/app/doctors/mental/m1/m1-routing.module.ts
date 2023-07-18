import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { M1Page } from './m1.page';

const routes: Routes = [
  {
    path: '',
    component: M1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class M1PageRoutingModule {}
