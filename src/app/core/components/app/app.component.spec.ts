import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MenuComponent } from '../menu/menu.component';

describe('AppComponent', () => {
  let app: any;
  let $app: any;
  let fixture: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent, MenuComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    $app = fixture.debugElement.nativeElement;
  });

  afterEach(() => {
    $app.remove();
  })

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

});
