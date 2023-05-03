import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionPanelComponent } from 'src/app/components/section-panel/section-panel.component';

@Component({
  selector: 'app-approach-parking',
  standalone: true,
  imports: [CommonModule, SectionPanelComponent],
  templateUrl: './approach-parking.component.html',
  styleUrls: ['./approach-parking.component.css']
})
export class ApproachParkingComponent {

}
