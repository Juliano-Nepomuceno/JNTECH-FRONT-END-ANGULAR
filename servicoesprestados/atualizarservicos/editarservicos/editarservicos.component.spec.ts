import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarservicosComponent } from './editarservicos.component';

describe('EditarservicosComponent', () => {
  let component: EditarservicosComponent;
  let fixture: ComponentFixture<EditarservicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarservicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarservicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
