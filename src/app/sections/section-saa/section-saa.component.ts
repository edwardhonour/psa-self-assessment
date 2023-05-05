import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-saa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-saa.component.html',
  styleUrls: ['./section-saa.component.css']
})
export class SectionSaaComponent {
  @Input() survey_id: any = '';
  @Input() section_id: any = '';
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  
}
