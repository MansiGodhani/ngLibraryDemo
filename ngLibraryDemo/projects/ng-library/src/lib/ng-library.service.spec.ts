import { TestBed } from '@angular/core/testing';

import { NgLibraryService } from './ng-library.service';

describe('NgLibraryService', () => {
  let service: NgLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
