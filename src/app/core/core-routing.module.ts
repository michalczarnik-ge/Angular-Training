import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'posts',
    loadChildren: '../posts/posts.module#PostsModule'
  },
  {
    path: 'users',
    loadChildren: () => import('../users/users.module').then(_ => _.UsersModule)
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
