import { HighlightDirective } from './highlight.directive';
import { TestBed, async } from '@angular/core/testing';
import { FakeComponent } from 'src/fakes/fake-component';
import { By } from '@angular/platform-browser';


describe('HighlightDirective', () => {
  let fixture = null;
  let component = null;
  let $component = null;

  let divDebugElement = null;
  let divNativeElement = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FakeComponent,
        HighlightDirective],
      imports: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeComponent);
    component = fixture.componentInstance;
    $component = fixture.nativeElement;

    divDebugElement = fixture.debugElement.query(
      By.directive(HighlightDirective)
    );

    divNativeElement = divDebugElement.nativeElement;     ///DOM reference
  });

  it('should add class after mouse over', () => {
    expect(divNativeElement.classList.contains('border')).toBeFalsy();

    divDebugElement.triggerEventHandler('mouseover');
    fixture.detectChanges();

    expect(divNativeElement.classList.contains('border')).toBeTruthy();
  });

  it('should remove class after mouse leave', () => {

    divNativeElement.classList.add('border');
    
    divDebugElement.triggerEventHandler('mouseleave');
    fixture.detectChanges();

    expect(divNativeElement.classList.contains('border')).toBeFalsy();
  });
});
