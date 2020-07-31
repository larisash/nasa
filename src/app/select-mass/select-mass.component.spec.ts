import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMassComponent } from './select-mass.component';

describe('SelectMassComponent', () => {
  let component: SelectMassComponent;
  let fixture: ComponentFixture<SelectMassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
