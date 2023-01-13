import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarporidComponent } from './listarporid.component';

describe('ListarporidComponent', () => {
  let component: ListarporidComponent;
  let fixture: ComponentFixture<ListarporidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarporidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarporidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
