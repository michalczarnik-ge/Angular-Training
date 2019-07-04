import { Component, OnInit } from '@angular/core';
import { IPost } from '../../interfaces/post.interface';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-profile-page',
  templateUrl: './post-profile-page.component.html',
  styleUrls: ['./post-profile-page.component.scss']
})
export class PostProfilePageComponent implements OnInit {

  post: IPost = null;
  error: any = null;

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) { }

  ngOnInit() {
    this.setupPost();
  }

  async setupPost() {
    //pobieranie post id z urla
    const postID = this.route.snapshot.params.postID;
    console.log(postID);
    try {
      //wziac dane o poscie z API
      const post = await this.postService.getPost(postID);

      //przypisac do zmiennej post wartosc posta
      this.post = post;
    } catch (e) {
      this.error = e.message;
    }
  }

}
