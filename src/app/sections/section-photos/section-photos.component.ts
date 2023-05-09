import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadPhotoComponent } from 'src/app/components/upload-photo/upload-photo.component';

@Component({
  selector: 'app-section-photos',
  standalone: true,
  imports: [CommonModule, UploadPhotoComponent],
  templateUrl: './section-photos.component.html',
  styleUrls: ['./section-photos.component.css']
})
export class SectionPhotosComponent implements OnInit {
   @Input() survey_id: any = '';
   @Input() section_id: any = '';
   @Input() asset_id: any = 0;
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
