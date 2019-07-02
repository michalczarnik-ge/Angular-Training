import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProfilePageComponent } from './post-profile-page.component';
import { PostsModule } from '../../posts.module';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PostProfilePageComponent', () => {
  let component: PostProfilePageComponent;
  let fixture: ComponentFixture<PostProfilePageComponent>;
  let $component: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostProfilePageComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, SharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostProfilePageComponent);
    component = fixture.componentInstance;
    $component = fixture.nativeElement;
  });

  afterEach(() => {
    $component.remove();
  });

  it('should create', () => {
    component.post = {
      id: 'fake-id',
      body:'fake-body', 
      created_time: '2019-11-11',
      images: [],
      author: {
        id: 'fake-id-inside',
        name: 'fake-name' ,
        avatar_url: 'fake-url'
      }
    };
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
