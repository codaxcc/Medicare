import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { M3Page } from './m3.page';

const routes: Routes = [
  {
    path: '',
    component: M3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class M3PageRoutingModule {}
