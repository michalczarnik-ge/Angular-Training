import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostProfilePageComponent } from './pages/post-profile-page/post-profile-page.component';

const routes: Routes = [
  {
    path: ':postID',
    component: PostProfilePageComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
