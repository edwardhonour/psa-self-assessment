import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityForceStaffingComponent } from './security-force-staffing.component';

describe('SecurityForceStaffingComponent', () => {
  let component: SecurityForceStaffingComponent;
  let fixture: ComponentFixture<SecurityForceStaffingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SecurityForceStaffingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityForceStaffingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
