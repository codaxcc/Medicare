import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ob1Page } from './ob1.page';

const routes: Routes = [
  {
    path: '',
    component: Ob1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ob1PageRoutingModule {}
