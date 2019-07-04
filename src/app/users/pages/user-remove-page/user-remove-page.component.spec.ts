import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRemovePageComponent } from './user-remove-page.component';

describe('UserRemovePageComponent', () => {
  let component: UserRemovePageComponent;
  let fixture: ComponentFixture<UserRemovePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRemovePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRemovePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
