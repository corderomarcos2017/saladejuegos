import { TestBed } from '@angular/core/testing';

import { GuardianpptGuard } from './guardianppt.guard';

describe('GuardianpptGuard', () => {
  let guard: GuardianpptGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardianpptGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
