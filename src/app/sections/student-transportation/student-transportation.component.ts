import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionPanelComponent } from 'src/app/components/section-panel/section-panel.component';

@Component({
  selector: 'app-student-transportation',
  standalone: true,
  imports: [CommonModule, SectionPanelComponent],
  templateUrl: './student-transportation.component.html',
  styleUrls: ['./student-transportation.component.css']
})
export class StudentTransportationComponent {

}
