import { Component, OnInit } from '@angular/core';
import { IPostList } from 'src/app/posts/interfaces/post-list.interface';
import { PostsService } from 'src/app/posts/services/posts.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  posts: IPostList = null;

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    console.log('ngOnOnit');
    this.setupPosts();
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

  async setupPosts(){
    this.posts = await this.postsService.getPosts();
  }

}
