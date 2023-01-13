import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaragendamentoComponent } from './atualizaragendamento.component';

describe('AtualizaragendamentoComponent', () => {
  let component: AtualizaragendamentoComponent;
  let fixture: ComponentFixture<AtualizaragendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizaragendamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizaragendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
