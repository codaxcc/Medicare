import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E3Page } from './e3.page';

const routes: Routes = [
  {
    path: '',
    component: E3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E3PageRoutingModule {}
