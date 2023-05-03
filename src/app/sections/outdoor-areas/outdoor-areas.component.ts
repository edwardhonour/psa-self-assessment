import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionPanelComponent } from 'src/app/components/section-panel/section-panel.component';

@Component({
  selector: 'app-outdoor-areas',
  standalone: true,
  imports: [CommonModule, SectionPanelComponent],
  templateUrl: './outdoor-areas.component.html',
  styleUrls: ['./outdoor-areas.component.css']
})
export class OutdoorAreasComponent {

}
