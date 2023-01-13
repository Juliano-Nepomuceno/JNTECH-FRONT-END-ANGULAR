import { TestBed } from '@angular/core/testing';

import { CrudClientesService } from './crud-clientes.service';

describe('CrudClientesService', () => {
  let service: CrudClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudClientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
