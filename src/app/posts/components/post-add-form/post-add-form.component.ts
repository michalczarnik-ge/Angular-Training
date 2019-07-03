import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    const form = this.addForm.getRawValue();
    console.log('Add post form: on submit', form);
    this.addPost.next(form);
  }

}
