import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionPanelComponent } from 'src/app/components/section-panel/section-panel.component';

@Component({
  selector: 'app-entry-controls',
  standalone: true,
  imports: [CommonModule, SectionPanelComponent],
  templateUrl: './entry-controls.component.html',
  styleUrls: ['./entry-controls.component.css']
})
export class EntryControlsComponent {

}
