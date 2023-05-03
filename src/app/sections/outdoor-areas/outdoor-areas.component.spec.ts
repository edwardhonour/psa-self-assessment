import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorAreasComponent } from './outdoor-areas.component';

describe('OutdoorAreasComponent', () => {
  let component: OutdoorAreasComponent;
  let fixture: ComponentFixture<OutdoorAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ OutdoorAreasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutdoorAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
