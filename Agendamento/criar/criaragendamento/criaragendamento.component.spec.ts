import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaragendamentoComponent } from './criaragendamento.component';

describe('CriaragendamentoComponent', () => {
  let component: CriaragendamentoComponent;
  let fixture: ComponentFixture<CriaragendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriaragendamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriaragendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
