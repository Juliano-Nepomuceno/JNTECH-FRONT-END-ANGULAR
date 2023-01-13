import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheclienteComponent } from './detalhecliente.component';

describe('DetalheclienteComponent', () => {
  let component: DetalheclienteComponent;
  let fixture: ComponentFixture<DetalheclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheclienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
