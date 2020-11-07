import { TestBed } from '@angular/core/testing';

import { FetchAlbumsService } from './fetch-albums.service';

describe('FetchAlbumsService', () => {
  let service: FetchAlbumsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchAlbumsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
