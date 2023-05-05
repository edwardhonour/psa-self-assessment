import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-documents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-documents.component.html',
  styleUrls: ['./section-documents.component.css']
})
export class SectionDocumentsComponent {
  @Input() survey_id: any = '';
  @Input() section_id: any = '';
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  
}
