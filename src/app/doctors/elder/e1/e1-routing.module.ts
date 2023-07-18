import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E1Page } from './e1.page';

const routes: Routes = [
  {
    path: '',
    component: E1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E1PageRoutingModule {}
