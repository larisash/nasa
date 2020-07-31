import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteorsViewComponent } from './meteors-view.component';

describe('MeteorsViewComponent', () => {
  let component: MeteorsViewComponent;
  let fixture: ComponentFixture<MeteorsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeteorsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteorsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
