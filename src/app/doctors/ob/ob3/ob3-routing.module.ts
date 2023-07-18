import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ob3Page } from './ob3.page';

const routes: Routes = [
  {
    path: '',
    component: Ob3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ob3PageRoutingModule {}
