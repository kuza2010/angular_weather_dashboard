import { TestBed } from '@angular/core/testing';

import { CookieHelperService } from './cookie-helper.service';

describe('CookieHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CookieHelperService = TestBed.get(CookieHelperService);
    expect(service).toBeTruthy();
  });
});
