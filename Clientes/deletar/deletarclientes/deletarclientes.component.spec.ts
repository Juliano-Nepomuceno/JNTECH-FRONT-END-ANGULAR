import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarclientesComponent } from './deletarclientes.component';

describe('DeletarclientesComponent', () => {
  let component: DeletarclientesComponent;
  let fixture: ComponentFixture<DeletarclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarclientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletarclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
