import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllAgendamentoComponent } from './list-all-agendamento.component';

describe('ListAllAgendamentoComponent', () => {
  let component: ListAllAgendamentoComponent;
  let fixture: ComponentFixture<ListAllAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllAgendamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
