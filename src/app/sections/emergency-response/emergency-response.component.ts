import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionPanelComponent } from 'src/app/components/section-panel/section-panel.component';

@Component({
  selector: 'app-emergency-response',
  standalone: true,
  imports: [CommonModule, SectionPanelComponent],
  templateUrl: './emergency-response.component.html',
  styleUrls: ['./emergency-response.component.css']
})
export class EmergencyResponseComponent {

}
