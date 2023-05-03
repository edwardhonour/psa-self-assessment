import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionPanelComponent } from 'src/app/components/section-panel/section-panel.component';

@Component({
  selector: 'app-general-description',
  standalone: true,
  imports: [CommonModule, SectionPanelComponent],
  templateUrl: './general-description.component.html',
  styleUrls: ['./general-description.component.css']
})
export class GeneralDescriptionComponent {

}
