import { TestBed } from '@angular/core/testing';

import { GuardiantriGuard } from './guardiantri.guard';

describe('GuardiantriGuard', () => {
  let guard: GuardiantriGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardiantriGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
