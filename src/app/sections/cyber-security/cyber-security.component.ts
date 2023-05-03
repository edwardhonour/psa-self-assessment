import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionPanelComponent } from 'src/app/components/section-panel/section-panel.component';

@Component({
  selector: 'app-cyber-security',
  standalone: true,
  imports: [CommonModule, SectionPanelComponent],
  templateUrl: './cyber-security.component.html',
  styleUrls: ['./cyber-security.component.css']
})
export class CyberSecurityComponent {

}
