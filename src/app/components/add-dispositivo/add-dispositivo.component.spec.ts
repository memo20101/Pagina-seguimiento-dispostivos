import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDispositivoComponent } from './add-dispositivo.component';

describe('AddDispositivoComponent', () => {
  let component: AddDispositivoComponent;
  let fixture: ComponentFixture<AddDispositivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDispositivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDispositivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
