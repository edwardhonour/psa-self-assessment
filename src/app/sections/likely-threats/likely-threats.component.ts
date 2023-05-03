import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionPanelComponent } from 'src/app/components/section-panel/section-panel.component';

@Component({
  selector: 'app-likely-threats',
  standalone: true,
  imports: [CommonModule, SectionPanelComponent],
  templateUrl: './likely-threats.component.html',
  styleUrls: ['./likely-threats.component.css']
})
export class LikelyThreatsComponent {

}
