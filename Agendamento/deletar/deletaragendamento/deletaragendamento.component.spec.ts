import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletaragendamentoComponent } from './deletaragendamento.component';

describe('DeletaragendamentoComponent', () => {
  let component: DeletaragendamentoComponent;
  let fixture: ComponentFixture<DeletaragendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletaragendamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletaragendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
