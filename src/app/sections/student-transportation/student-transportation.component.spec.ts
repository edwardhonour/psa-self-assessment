import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTransportationComponent } from './student-transportation.component';

describe('StudentTransportationComponent', () => {
  let component: StudentTransportationComponent;
  let fixture: ComponentFixture<StudentTransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StudentTransportationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
