import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionPanelComponent } from 'src/app/components/section-panel/section-panel.component';

@Component({
  selector: 'app-incident-history',
  standalone: true,
  imports: [CommonModule, SectionPanelComponent],
  templateUrl: './incident-history.component.html',
  styleUrls: ['./incident-history.component.css']
})
export class IncidentHistoryComponent {

}
