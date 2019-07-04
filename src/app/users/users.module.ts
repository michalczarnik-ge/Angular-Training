import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';
import { LogoutPageComponent } from './pages/logout-page/logout-page.component';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from '../shared/shared.module';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserPostListComponent } from './components/user-post-list/user-post-list.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { PostsModule } from '../posts/posts.module';
@NgModule({
  declarations: [RegisterPageComponent, LoginPageComponent, UserProfilePageComponent, LogoutPageComponent, UserDetailsComponent, UserPostListComponent, UserMenuComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PostsModule
  ]
})
export class UsersModule { }
