import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingEnvelopeComponent } from './building-envelope.component';

describe('BuildingEnvelopeComponent', () => {
  let component: BuildingEnvelopeComponent;
  let fixture: ComponentFixture<BuildingEnvelopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BuildingEnvelopeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingEnvelopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
