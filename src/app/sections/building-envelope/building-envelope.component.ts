import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionPanelComponent } from 'src/app/components/section-panel/section-panel.component';

@Component({
  selector: 'app-building-envelope',
  standalone: true,
  imports: [CommonModule, SectionPanelComponent],
  templateUrl: './building-envelope.component.html',
  styleUrls: ['./building-envelope.component.css']
})
export class BuildingEnvelopeComponent {

}
