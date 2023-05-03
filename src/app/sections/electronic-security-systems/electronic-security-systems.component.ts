import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionPanelComponent } from 'src/app/components/section-panel/section-panel.component';

@Component({
  selector: 'app-electronic-security-systems',
  standalone: true,
  imports: [CommonModule, SectionPanelComponent],
  templateUrl: './electronic-security-systems.component.html',
  styleUrls: ['./electronic-security-systems.component.css']
})
export class ElectronicSecuritySystemsComponent {

}
