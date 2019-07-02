import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPostList } from '../interfaces/post-list.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getPosts(): Promise<IPostList> {
    return this.http.get<IPostList>('/assets/posts.json').toPromise();
  }
}
