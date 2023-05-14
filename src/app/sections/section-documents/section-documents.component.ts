import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadDocumentComponent } from 'src/app/components/upload-document/upload-document.component';

@Component({
  selector: 'app-section-documents',
  standalone: true,
  imports: [CommonModule, UploadDocumentComponent],
  templateUrl: './section-documents.component.html',
  styleUrls: ['./section-documents.component.css']
})
export class SectionDocumentsComponent implements OnInit {
  @Input() survey_id: any = '';
  @Input() section_id: any = '';
  @Input() asset_id: any = 0;
  @Input() option_id: any = 0;
  @Input() data: any;

  uploading: any = 'N';


  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  
  closeIt() {
   this.close.emit('N');
 }

 toggleUpload() {
  if (this.uploading=='Y') {
    this.uploading='N';
  } else {
    this.uploading='Y';
  }
}

 ngOnInit(): void {
     console.log('Section Photos') 
     console.log(this.data); 
 }

}