import { Component, OnInit, Input } from '@angular/core';
import { IComment } from '../../interfaces/comment';

@Component({
  selector: 'app-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.scss']
})
export class CommentListItemComponent implements OnInit {

  @Input() comment: IComment = null;

  constructor() { }

  ngOnInit() {
  }

}
