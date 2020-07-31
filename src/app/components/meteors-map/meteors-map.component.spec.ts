import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteorsMapComponent } from './meteors-map.component';

describe('MeteorsMapComponent', () => {
  let component: MeteorsMapComponent;
  let fixture: ComponentFixture<MeteorsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeteorsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteorsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
