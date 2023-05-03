import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionPanelComponent } from 'src/app/components/section-panel/section-panel.component';

@Component({
  selector: 'app-perimeter-security',
  standalone: true,
  imports: [CommonModule, SectionPanelComponent],
  templateUrl: './perimeter-security.component.html',
  styleUrls: ['./perimeter-security.component.css']
})
export class PerimeterSecurityComponent {

}
