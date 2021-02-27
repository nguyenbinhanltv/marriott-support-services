import { TestBed } from '@angular/core/testing';

import { InauthGuard } from './inauth.guard';

describe('InauthGuard', () => {
  let guard: InauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
