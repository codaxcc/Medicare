import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MentalPage } from './mental.page';

const routes: Routes = [
  {
    path: '',
    component: MentalPage
  },
  {
    path: 'm1',
    loadChildren: () => import('./m1/m1.module').then( m => m.M1PageModule)
  },
  {
    path: 'm2',
    loadChildren: () => import('./m2/m2.module').then( m => m.M2PageModule)
  },
  {
    path: 'm3',
    loadChildren: () => import('./m3/m3.module').then( m => m.M3PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentalPageRoutingModule {}
