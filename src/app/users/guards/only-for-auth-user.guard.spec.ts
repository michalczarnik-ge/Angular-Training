import { TestBed, async, inject } from '@angular/core/testing';

import { OnlyForAuthUserGuard } from './only-for-auth-user.guard';

describe('OnlyForAuthUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnlyForAuthUserGuard]
    });
  });

  it('should ...', inject([OnlyForAuthUserGuard], (guard: OnlyForAuthUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
