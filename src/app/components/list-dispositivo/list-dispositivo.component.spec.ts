import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDispositivoComponent } from './list-dispositivo.component';

describe('ListDispositivoComponent', () => {
  let component: ListDispositivoComponent;
  let fixture: ComponentFixture<ListDispositivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDispositivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDispositivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
