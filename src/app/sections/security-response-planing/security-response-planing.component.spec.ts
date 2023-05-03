import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityResponsePlaningComponent } from './security-response-planing.component';

describe('SecurityResponsePlaningComponent', () => {
  let component: SecurityResponsePlaningComponent;
  let fixture: ComponentFixture<SecurityResponsePlaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SecurityResponsePlaningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityResponsePlaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
