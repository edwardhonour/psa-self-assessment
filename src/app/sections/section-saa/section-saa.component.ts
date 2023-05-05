import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-saa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-saa.component.html',
  styleUrls: ['./section-saa.component.css']
})
export class SectionSaaComponent  implements OnInit {
  @Input() survey_id: any = '';
  @Input() section_id: any = '';
  @Input() data: any;

  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  
  closeIt() {
   this.close.emit('N');
 }

 ngOnInit(): void {
     console.log('Section Photos') 
     console.log(this.data); 
 }

}
