import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteorsCardsComponent } from './meteors-cards.component';

describe('MeteorsCardsComponent', () => {
  let component: MeteorsCardsComponent;
  let fixture: ComponentFixture<MeteorsCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeteorsCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteorsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
