import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObPage } from './ob.page';

const routes: Routes = [
  {
    path: '',
    component: ObPage
  },
  {
    path: 'ob1',
    loadChildren: () => import('./ob1/ob1.module').then( m => m.Ob1PageModule)
  },
  {
    path: 'ob2',
    loadChildren: () => import('./ob2/ob2.module').then( m => m.Ob2PageModule)
  },
  {
    path: 'ob3',
    loadChildren: () => import('./ob3/ob3.module').then( m => m.Ob3PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObPageRoutingModule {}
