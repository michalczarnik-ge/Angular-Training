import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPostList } from '../interfaces/post-list.interface';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getPosts(): Promise<IPostList> {
    return this.http.get<{posts: IPostList}>(environment.postsUrl)
    .pipe(
      map(response => response.posts)
    )
    .toPromise();
  }

  async getPost(postID){
    const posts = await this.getPosts();
    const post = posts.find((post) => {
      return post.id === postID
    });
    return post;
  }
}
