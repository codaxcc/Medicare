import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginModule)
  },

  {
    path: 'signup',
    loadChildren: () => import('./auth/signup/signup.module').then( m => m.SignupModule)
  },

  { path: 'forgot-password-modal',
   loadChildren: () => import('./auth/forgot-password-modal/forgot-password-modal.module').then(m => m.ForgotPasswordModalModule) },
   {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) 
  },
  {
    path: 'appointment',
    loadChildren: () => import('./appointment/appointment.module').then( m => m.AppointmentPageModule)
  },
  {
    path: 'primary',
    loadChildren: () => import('./doctors/primary/primary.module').then( m => m.PrimaryPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./doctors/primary/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'pedia',
    loadChildren: () => import('./doctors/pedia/pedia.module').then( m => m.PediaPageModule)
  },
  {
    path: 'dental',
    loadChildren: () => import('./doctors/dental/dental.module').then( m => m.DentalPageModule)
  },
  {
    path: 'mental',
    loadChildren: () => import('./doctors/mental/mental.module').then( m => m.MentalPageModule)
  },
  {
    path: 'elder',
    loadChildren: () => import('./doctors/elder/elder.module').then( m => m.ElderPageModule)
  },
  {
    path: 'ob',
    loadChildren: () => import('./doctors/ob/ob.module').then( m => m.ObPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'cardio',
    loadChildren: () => import('./doctors/cardio/cardio.module').then( m => m.CardioPageModule)
  },
  {
    path: 'notif',
    loadChildren: () => import('./notif/notif.module').then( m => m.NotifPageModule),canActivate: [AuthGuard]
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
