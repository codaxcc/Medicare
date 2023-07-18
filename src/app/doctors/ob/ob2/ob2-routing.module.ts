import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ob2Page } from './ob2.page';

const routes: Routes = [
  {
    path: '',
    component: Ob2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ob2PageRoutingModule {}
