import { Component, OnInit, Input } from '@angular/core';
import { IPostList } from '../../interfaces/post-list.interface';

import { IPost } from '../../interfaces/post.interface';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  @Input() posts: IPostList = null;
  
  constructor(
    private postsService: PostsService,
  ) { }

  ngOnInit() {
  }

  async onAddPost(post: IPost) {
    console.log("On add post", post);
    //Dodawanie na poczatku listy
    this.posts.unshift(post);
    try {
      //Dodawanie na koncu listy
      await this.postsService.addPost(post);
    }
    catch (e) {
      console.warn(e);
    }
  }

}
