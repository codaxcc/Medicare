import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E2Page } from './e2.page';

const routes: Routes = [
  {
    path: '',
    component: E2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E2PageRoutingModule {}
