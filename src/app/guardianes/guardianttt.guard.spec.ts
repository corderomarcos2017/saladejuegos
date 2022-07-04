import { TestBed } from '@angular/core/testing';

import { GuardiantttGuard } from './guardianttt.guard';

describe('GuardiantttGuard', () => {
  let guard: GuardiantttGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardiantttGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
