import { TestBed } from '@angular/core/testing';

import { NextslideService } from './nextslide.service';

describe('NextslideService', () => {
  let service: NextslideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NextslideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
