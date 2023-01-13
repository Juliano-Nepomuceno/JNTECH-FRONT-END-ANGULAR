import { TestBed } from '@angular/core/testing';

import { CrudAgendamentoService } from './crud-agendamento.service';

describe('CrudAgendamentoService', () => {
  let service: CrudAgendamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudAgendamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
