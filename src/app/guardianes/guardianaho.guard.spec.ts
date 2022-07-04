import { TestBed } from '@angular/core/testing';

import { GuardianahoGuard } from './guardianaho.guard';

describe('GuardianahoGuard', () => {
  let guard: GuardianahoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardianahoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
