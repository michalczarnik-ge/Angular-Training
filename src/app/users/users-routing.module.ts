import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LogoutPageComponent } from './pages/logout-page/logout-page.component';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserPostListComponent } from './components/user-post-list/user-post-list.component';
import { OnlyForAuthUserGuard } from './guards/only-for-auth-user.guard';
import { UserRemovePageComponent } from './pages/user-remove-page/user-remove-page.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'logout',
    component: LogoutPageComponent
  },
  {
    path: 'profile',
    children: [
      {
        path: '',
        redirectTo: 'details'
      },
      {
        path: 'details',
        component: UserDetailsComponent
      },
      {
        path: 'posts',
        component: UserPostListComponent,
      },
      {
        path: 'remove',
        component: UserRemovePageComponent
      },
    ],
    canActivate: [OnlyForAuthUserGuard]
  },
  {
    path: ':userID',
    component: UserProfilePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
