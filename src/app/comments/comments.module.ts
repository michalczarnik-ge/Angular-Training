import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentListItemComponent } from './components/comment-list-item/comment-list-item.component';
import { CommentAddFormComponent } from './components/comment-add-form/comment-add-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommentListComponent, CommentListItemComponent, CommentAddFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CommentListComponent, CommentListItemComponent, CommentAddFormComponent]
})
export class CommentsModule { }
