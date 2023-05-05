import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-section-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-comments.component.html',
  styleUrls: ['./section-comments.component.css']
})
export class SectionCommentsComponent {
  @Input() survey_id: any = '';
  @Input() section_id: any = '';
  @Output() close: EventEmitter<any> = new EventEmitter<any>();

}
