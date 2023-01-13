import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAgendamentoComponent } from './buscar-agendamento.component';

describe('BuscarAgendamentoComponent', () => {
  let component: BuscarAgendamentoComponent;
  let fixture: ComponentFixture<BuscarAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarAgendamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
