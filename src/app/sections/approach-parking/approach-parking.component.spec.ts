import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproachParkingComponent } from './approach-parking.component';

describe('ApproachParkingComponent', () => {
  let component: ApproachParkingComponent;
  let fixture: ComponentFixture<ApproachParkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ApproachParkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproachParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
