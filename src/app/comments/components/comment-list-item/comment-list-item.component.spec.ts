import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentListItemComponent } from './comment-list-item.component';

describe('CommentListItemComponent', () => {
  let component: CommentListItemComponent;
  let fixture: ComponentFixture<CommentListItemComponent>;
  let $component: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentListItemComponent);
    component = fixture.componentInstance;
    $component = fixture.nativeElement;
  });

  afterEach(() => {
    $component.remove();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
