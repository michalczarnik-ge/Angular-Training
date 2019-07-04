import { Component, OnInit, Input } from '@angular/core';
import { IPostList } from '../../interfaces/post-list.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts: IPostList = null;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(!this.posts)
      return;
    this.posts.sort((p1, p2) => {
      const date1 = new Date(p1.created_time);
      const date2 = new Date(p2.created_time);
      if(date1.getTime() > date2.getTime()) return -1;
      else if(date1.getTime() < date2.getTime())  return 1
      return 0;
    });
  }

}
