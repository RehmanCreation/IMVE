import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInPage } from './sign-in/sign-in.page';
import { ForgotPasswordPage } from './forgot-password/forgot-password.page';


const routes: Routes = [

  { path: '', redirectTo: 'splash', pathMatch: 'full' },

  { path: 'splash', loadChildren: () => import('./splash/splash.module').then(m => m.SplashPageModule) },

  { path: 'welcome', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomePageModule) },

  { path: 'sign-in', loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInPageModule) },

  { path: 'forgot-password', loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule) },

  { path: 'reset-password', loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordPageModule) },

  { path: 'home', loadChildren: () => import('./Dashboard/home/home.module').then(m => m.HomePageModule) },

  { path: 'view-all', loadChildren: () => import('./Dashboard/view-all/view-all.module').then(m => m.ViewAllPageModule) },

  { path: 'create-task', loadChildren: () => import('./Dashboard/create-task/create-task.module').then(m => m.CreateTaskPageModule) },

  { path: 'client', loadChildren: () => import('./Dashboard/client/client.module').then(m => m.ClientPageModule) },

  { path: 'add-new-client', loadChildren: () => import('./Dashboard/add-new-client/add-new-client.module').then(m => m.AddNewClientPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
