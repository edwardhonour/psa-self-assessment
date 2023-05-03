import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikelyThreatsComponent } from './likely-threats.component';

describe('LikelyThreatsComponent', () => {
  let component: LikelyThreatsComponent;
  let fixture: ComponentFixture<LikelyThreatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LikelyThreatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikelyThreatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
