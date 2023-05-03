import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerimeterSecurityComponent } from './perimeter-security.component';

describe('PerimeterSecurityComponent', () => {
  let component: PerimeterSecurityComponent;
  let fixture: ComponentFixture<PerimeterSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PerimeterSecurityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerimeterSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
