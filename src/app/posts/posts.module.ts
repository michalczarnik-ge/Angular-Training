import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PostListComponent, PostListItemComponent],
  exports: [PostListComponent, PostListItemComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class PostsModule { }
