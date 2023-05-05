import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-photos.component.html',
  styleUrls: ['./section-photos.component.css']
})
export class SectionPhotosComponent {
   @Input() survey_id: any = '';
   @Input() section_id: any = '';
   @Output() close: EventEmitter<any> = new EventEmitter<any>();
   
}
