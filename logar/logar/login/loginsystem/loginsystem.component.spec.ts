import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsystemComponent } from './loginsystem.component';

describe('LoginsystemComponent', () => {
  let component: LoginsystemComponent;
  let fixture: ComponentFixture<LoginsystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginsystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
