import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { PostProfilePageComponent } from './pages/post-profile-page/post-profile-page.component';
import { CommentsModule } from '../comments/comments.module';
import { PostAddFormComponent } from './components/post-add-form/post-add-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedComponent } from './components/feed/feed.component';
import { UsersModule } from '../users/users.module';

@NgModule({
  declarations: [PostListComponent, PostListItemComponent, PostProfilePageComponent, PostAddFormComponent, FeedComponent],
  exports: [PostListComponent, PostListItemComponent, PostAddFormComponent, FeedComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    HttpClientModule,
    CommentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PostsModule { }
