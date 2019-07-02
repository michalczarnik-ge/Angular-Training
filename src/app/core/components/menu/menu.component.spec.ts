import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let $component: any;
  let fixture: ComponentFixture<MenuComponent>;         ///Manager komponentu (w tym przypadku)

  beforeEach(async(() => {                              ///Zostanie uruchomione przed każdym testem (it())
    TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();                               ///Proces asynchroniczny
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);   ///TestBed - emulacja środowiska uruchomieniowego
    component = fixture.componentInstance;              ///Instancja klasy
    $component = fixture.nativeElement;                ///Instancja elementu w DOM
  });

  ///Teardown - czyszczenie po testach
  afterEach(() => {                                     ///Po każdym teście
    $component.remove();
  });

  it('should create', () => {

    ///Act - uruchamiamy przypadek testowy
    fixture.detectChanges();

    //Assert - weryfikacja stanu
    expect(component).toBeTruthy();
  });
});
