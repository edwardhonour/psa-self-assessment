import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryControlsComponent } from './entry-controls.component';

describe('EntryControlsComponent', () => {
  let component: EntryControlsComponent;
  let fixture: ComponentFixture<EntryControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EntryControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
