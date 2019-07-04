import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';

import uuid from 'uuid';
import { IComment } from '../../interfaces/comment';
import { UsersService } from 'src/app/users/services/users.service';
import { IUser } from 'src/app/users/interfaces/user.interface';

@Component({
  selector: 'app-comment-add-form',
  templateUrl: './comment-add-form.component.html',
  styleUrls: ['./comment-add-form.component.scss']
})
export class CommentAddFormComponent implements OnInit {

  @Output() addComment = new EventEmitter();

  comment = {
    body: null
  };

  author: IUser = null;
  
  constructor(
    private userService: UsersService  
    ) { }

  async ngOnInit() {
    this.author = await this.userService.getCurrentUser();
  }

  async onSubmit(commentForm) {
    console.log("onSubmit", this.comment);
    const comment = await CommentAddFormComponent.parseCommentForm(this.comment, this.author)
    this.addComment.next(comment);
    commentForm.reset();
  }

  static parseCommentForm(comment, author): IComment {
    return {
      id: uuid(),
      body: comment.body,
      created_time: new Date().toUTCString(),
      author
    }
  }

}
