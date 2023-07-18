import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
 

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [

        {
          path: 'list',
          loadChildren: () => import('../screen/list/list.module').then( m => m.ListPageModule)
        },
        {
          path:'',
          redirectTo:'list',
          pathMatch:'full',
        },

        {
          path: 'appointment',
          loadChildren: () => import('../appointment/appointment.module').then( m => m.AppointmentPageModule)
        },
        {
          path:'',
          redirectTo:'appointment',
          pathMatch:'full',
        },
        {
          path: 'user-profile',
          loadChildren: () => import('../user-profile/user-profile.module').then( m => m.UserProfilePageModule)
        },
        {
          path:'',
          redirectTo:'user-profile',
          pathMatch:'full',
        
        }
        
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
