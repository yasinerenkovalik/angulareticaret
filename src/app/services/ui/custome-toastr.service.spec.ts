import { TestBed } from '@angular/core/testing';

import { CustomeToastrService } from './custome-toastr.service';

describe('CustomeToastrService', () => {
  let service: CustomeToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomeToastrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
