import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarclienteComponent } from './adicionarcliente.component';

describe('AdicionarclienteComponent', () => {
  let component: AdicionarclienteComponent;
  let fixture: ComponentFixture<AdicionarclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarclienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
