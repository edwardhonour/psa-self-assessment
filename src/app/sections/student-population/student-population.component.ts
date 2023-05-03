import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionPanelComponent } from 'src/app/components/section-panel/section-panel.component';

@Component({
  selector: 'app-student-population',
  standalone: true,
  imports: [CommonModule, SectionPanelComponent],
  templateUrl: './student-population.component.html',
  styleUrls: ['./student-population.component.css']
})
export class StudentPopulationComponent {

}
