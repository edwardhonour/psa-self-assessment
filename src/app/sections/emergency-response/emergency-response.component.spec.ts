import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyResponseComponent } from './emergency-response.component';

describe('EmergencyResponseComponent', () => {
  let component: EmergencyResponseComponent;
  let fixture: ComponentFixture<EmergencyResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EmergencyResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergencyResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
