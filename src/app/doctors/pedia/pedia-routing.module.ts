import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PediaPage } from './pedia.page';

const routes: Routes = [
  {
    path: '',
    component: PediaPage
  },
  {
    path: 'p1',
    loadChildren: () => import('./p1/p1.module').then( m => m.P1PageModule)
  },
  {
    path: 'p2',
    loadChildren: () => import('./p2/p2.module').then( m => m.P2PageModule)
  },
  {
    path: 'p3',
    loadChildren: () => import('./p3/p3.module').then( m => m.P3PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PediaPageRoutingModule {}
