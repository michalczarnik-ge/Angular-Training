import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import uuid from 'uuid'
import { IPost } from '../../interfaces/post.interface';
import { getLocaleDateTimeFormat } from '@angular/common';
import { UsersService } from 'src/app/users/services/users.service';

@Component({
  selector: 'app-post-add-form',
  templateUrl: './post-add-form.component.html',
  styleUrls: ['./post-add-form.component.scss']
})
export class PostAddFormComponent implements OnInit {

  body = new FormControl('', [Validators.required]);
  addForm = new FormGroup({
    body: this.body
  });

  @Output() addPost = new EventEmitter();

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    const form = this.addForm.getRawValue();
    const post = PostAddFormComponent.parsePostForm(form, this.userService);
    console.log('Add post form: on submit', post);
    this.addPost.next(post);
  }

  static parsePostForm(form, userService: UsersService) :IPost{
    return {
      body: form.body,
      id: uuid(),
      created_time: new Date().toUTCString(),
      author: userService.getCurrentUser(),
      images: []
    }
  }

}
