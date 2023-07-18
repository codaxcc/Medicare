import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DentalPage } from './dental.page';

const routes: Routes = [
  {
    path: '',
    component: DentalPage
  },
  {
    path: 'd1',
    loadChildren: () => import('./d1/d1.module').then( m => m.D1PageModule)
  },
  {
    path: 'd2',
    loadChildren: () => import('./d2/d2.module').then( m => m.D2PageModule)
  },
  {
    path: 'd3',
    loadChildren: () => import('./d3/d3.module').then( m => m.D3PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DentalPageRoutingModule {}
