import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicSecuritySystemsComponent } from './electronic-security-systems.component';

describe('ElectronicSecuritySystemsComponent', () => {
  let component: ElectronicSecuritySystemsComponent;
  let fixture: ComponentFixture<ElectronicSecuritySystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ElectronicSecuritySystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectronicSecuritySystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
