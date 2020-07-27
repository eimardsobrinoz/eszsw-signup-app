import { TestBed } from '@angular/core/testing';

import { CompleteFormGuard } from './complete-form.guard';

describe('CompleteFormGuard', () => {
  let guard: CompleteFormGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CompleteFormGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
