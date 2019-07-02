import { TestBed } from '@angular/core/testing';

import { PostsService } from './posts.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { environment } from 'src/environments/environment';
import { IPost } from '../interfaces/post.interface';

describe('PostsService', () => {
  let service = null;
  let httpMock: HttpTestingController = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.get(PostsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe("getPosts", () => {
    it('getPosts: should be defined', () => {
      expect(service.getPosts).toEqual(jasmine.any(Function));
    });

    it('getPosts: should make http request', async () => {
      const response = service.getPosts(); //Promise
      const server = httpMock.expectOne(environment.postsUrl);
      server.flush({posts: [
        { id: "fake-id", body: "fake-body" }
      ]});
      const posts = await response;
      
      expect(posts.length).toEqual(1);
    });
  });

  describe("getPost", () => {
    it('getPost: should be defined', () => {
      expect(service.getPost).toEqual(jasmine.any(Function));
    });

    it('getPost: should make http request', async () => {
      const postID = "fake-id";
      const server = httpMock.expectOne(environment.postsUrl);
      const response = service.getPost(postID);
      server.flush({posts: [
        { id: postID, body: "fake-body" }
      ]});
      const post = await response as IPost;
      expect(post.id).toEqual(postID);
    });
  });
});
