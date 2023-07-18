import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElderPage } from './elder.page';

const routes: Routes = [
  {
    path: '',
    component: ElderPage
  },
  {
    path: 'e1',
    loadChildren: () => import('./e1/e1.module').then( m => m.E1PageModule)
  },
  {
    path: 'e2',
    loadChildren: () => import('./e2/e2.module').then( m => m.E2PageModule)
  },
  {
    path: 'e3',
    loadChildren: () => import('./e3/e3.module').then( m => m.E3PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElderPageRoutingModule {}
