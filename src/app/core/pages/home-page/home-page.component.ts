import { Component, OnInit } from '@angular/core';
import { IPostList } from 'src/app/posts/interfaces/post-list.interface';
import { PostsService } from 'src/app/posts/services/posts.service';
import { IPost } from 'src/app/posts/interfaces/post.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  posts: IPostList = null;
  error: any = null;

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    console.log('ngOnOnit');
    this.setupPosts();
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  async setupPosts() {
    try{
      this.posts = await this.postsService.getPosts();
    }catch(e){
      this.error = e.message;
      this.posts=[];
    }
  }

}
