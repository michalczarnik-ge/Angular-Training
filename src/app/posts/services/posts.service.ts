import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPostList } from '../interfaces/post-list.interface';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { IPost } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(
    private http: HttpClient
  ) {
  }

  getPosts(): Promise<IPostList> {
    return this.http.get<IPostList>(environment.postsUrl).toPromise();
  }

  async getPost(postID){
    const posts = await this.getPosts();
    const post = posts.find((post) => {
      return post.id === postID
    });
    return post;
  }

  addPost(post: IPost) {
    return this.http.post(environment.postsUrl, post).toPromise();
  }

  savePost(post: IPost) {
    const url = `${environment.postsUrl}/${post.id}`
    return this.http.put(url, post).toPromise();
  }

  deletePost(postID) {
    const url = `${environment.postsUrl}/${postID}`
    return this.http.delete(url).toPromise();
  }
}
