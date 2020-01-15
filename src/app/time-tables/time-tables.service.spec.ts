import { TestBed } from '@angular/core/testing';

import { TimeTablesService } from './time-tables.service';

describe('TimeTablesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeTablesService = TestBed.get(TimeTablesService);
    expect(service).toBeTruthy();
  });
});
