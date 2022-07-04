import { TestBed } from '@angular/core/testing';

import { GuardianadvGuard } from './guardianadv.guard';

describe('GuardianadvGuard', () => {
  let guard: GuardianadvGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardianadvGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
