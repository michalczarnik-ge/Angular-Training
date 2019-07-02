import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListComponent } from './post-list.component';
import { PostListItemComponent } from '../post-list-item/post-list-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;
  let $component: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListComponent, PostListItemComponent ],
      imports: [SharedModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    $component = fixture.nativeElement;
  });

  afterEach(() => {
    $component.remove();
  });

  it('should create', () => {
    fixture.detectChanges();
    component.posts = [];
    expect(component).toBeTruthy();
  });
});
