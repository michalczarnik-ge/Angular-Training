import { Component, OnInit, Input } from '@angular/core';
import { ICommentList } from '../../interfaces/comment-list';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  @Input() comments: ICommentList = null;
  
  constructor() { }

  ngOnInit() {
  }

}
