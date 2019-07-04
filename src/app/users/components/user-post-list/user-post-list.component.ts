import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/posts/services/posts.service';
import { IPostList } from 'src/app/posts/interfaces/post-list.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-post-list',
  templateUrl: './user-post-list.component.html',
  styleUrls: ['./user-post-list.component.scss']
})
export class UserPostListComponent implements OnInit {

  error = null;
  userPosts: IPostList = null;
  constructor(
    private postsService: PostsService,
    private usersService: UsersService,
  ) {
  }

  async ngOnInit() {
    try {
      this.userPosts = await this.postsService.getPosts();
      const currentUser = await this.usersService.getCurrentUser();
      this.userPosts = this.userPosts.filter((post) => {
        return post.author.id === currentUser.id
      });
    } catch (e) {
      this.error = e.message;
    }
  }

}
