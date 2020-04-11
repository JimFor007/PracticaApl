import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesrcripcionFormularioComponent } from './desrcripcion-formulario.component';

describe('DesrcripcionFormularioComponent', () => {
  let component: DesrcripcionFormularioComponent;
  let fixture: ComponentFixture<DesrcripcionFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesrcripcionFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesrcripcionFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
