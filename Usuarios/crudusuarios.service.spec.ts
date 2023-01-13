import { TestBed } from '@angular/core/testing';

import { CrudusuariosService } from './crudusuarios.service';

describe('CrudusuariosService', () => {
  let service: CrudusuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudusuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
