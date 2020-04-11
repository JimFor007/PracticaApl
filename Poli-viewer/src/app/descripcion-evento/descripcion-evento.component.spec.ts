import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionEventoComponent } from './descripcion-evento.component';

describe('DescripcionEventoComponent', () => {
  let component: DescripcionEventoComponent;
  let fixture: ComponentFixture<DescripcionEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripcionEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
