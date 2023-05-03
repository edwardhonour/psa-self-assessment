import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionPanelComponent } from 'src/app/components/section-panel/section-panel.component';

@Component({
  selector: 'app-security-force-staffing',
  standalone: true,
  imports: [CommonModule, SectionPanelComponent],
  templateUrl: './security-force-staffing.component.html',
  styleUrls: ['./security-force-staffing.component.css']
})
export class SecurityForceStaffingComponent {

}
