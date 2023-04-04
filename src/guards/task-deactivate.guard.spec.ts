import { TestBed } from '@angular/core/testing';

import { TaskDeactivateGuard } from './task-deactivate.guard';

describe('TaskDeactivateGuard', () => {
  let guard: TaskDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TaskDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
