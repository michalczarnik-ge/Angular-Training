import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentAddFormComponent } from './comment-add-form.component';

describe('CommentAddFormComponent', () => {
  let component: CommentAddFormComponent;
  let fixture: ComponentFixture<CommentAddFormComponent>;
  let $component: any; 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentAddFormComponent);
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
