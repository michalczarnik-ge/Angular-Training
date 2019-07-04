import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { PostsService } from '../../services/posts.service';
@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit, OnChanges {

  @Input() post = null;
  @Output() removePost = new EventEmitter();

  constructor(
    private postService: PostsService
  ) { 
  }

  ngOnInit() {
  }

  ngOnChanges(){
    if(!this.post.comments)
      this.post.comments = [];
  }

  async onAddComment(comment){
    console.log(comment);
    this.post.comments.push(comment);
    try{
      await this.postService.savePost(this.post);
    }catch(e){
      console.warn(e);
    }
  }

  onRemovePost(){
    this.removePost.next(this.post);
    console.log("on remove post");
  }
}
