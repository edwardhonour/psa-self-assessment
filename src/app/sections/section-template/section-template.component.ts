import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionPanelComponent } from 'src/app/components/section-panel/section-panel.component';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { SectionCommentsComponent } from '../section-comments/section-comments.component';
import { SectionPhotosComponent } from '../section-photos/section-photos.component';
import { SectionSaaComponent } from '../section-saa/section-saa.component';
import { SectionDocumentsComponent } from '../section-documents/section-documents.component';
import { UploadPhotoComponent } from 'src/app/components/upload-photo/upload-photo.component';
import { UploadDocumentComponent } from 'src/app/components/upload-document/upload-document.component';
import { SectionBackgroundComponent } from 'src/app/components/section-background/section-background.component';

@Component({
  selector: 'app-section-template',
  standalone: true,
  imports: [CommonModule, SectionBackgroundComponent, SectionPanelComponent, SectionCommentsComponent, SectionPhotosComponent, SectionSaaComponent, SectionDocumentsComponent, UploadPhotoComponent, UploadDocumentComponent],
  templateUrl: './section-template.component.html',
  styleUrls: ['./section-template.component.css']
})
export class SectionTemplateComponent implements OnInit, OnChanges {

  @Input() org_id: any='0';
  @Input() section_id: any='50';
  @Input() template_id: any='0';
  @Input() include_photos: any = 'Y';
  @Input() include_documents: any = 'Y';
  @Input() include_comments: any = 'Y';
  @Input() include_saa: any = 'Y';
  @Input() include_background: any = 'Y';


  data: any;
  show_photos: any='N';
  show_documents: any='N';
  show_comments: any='N';
  show_saa: any='N';
  show_report: any = 'N'

  ngOnChanges(changes: SimpleChanges): void {
    console.log('section template changes')
  }

  parameters: any = {
    survey_id: '',
    section_id: ''
  }

  togglePhotos() {
    if (this.show_photos=='Y') {
      this.show_photos='N';
    } else {
      this.show_photos='Y';
      this.show_comments='N';
      this.show_documents='N';
      this.show_saa='N';
    }
  }

  toggleComments() {
    if (this.show_comments=='Y') {
      this.show_comments='N';
    } else {
      this.show_photos='N';
      this.show_comments='Y';
      this.show_documents='N';
      this.show_saa='N';
    }
  }

  toggleReport() {
    if (this.show_report=='Y') {
      this.show_report='N';
    } else {
      this.show_photos='N';
      this.show_comments='N';
      this.show_documents='N';
      this.show_report='Y';
      this.show_saa='N';
    }
  }

  toggleDocuments() {
    if (this.show_documents=='Y') {
      this.show_documents='N';
    } else {
      this.show_photos='N';
      this.show_comments='N';
      this.show_documents='Y';
      this.show_saa='N';
    }
  }

  closeAll() {
    this.show_photos='N';
    this.show_comments='N';
    this.show_documents='N';
    this.show_saa='N';
    this.show_report='N';
  }

  toggleSaa() {
    if (this.show_saa=='Y') {
      this.show_saa='N';
    } else {
      this.show_photos='N';
      this.show_comments='N';
      this.show_documents='N';
      this.show_saa='Y';
    }
  }



  constructor(private _dataService: DataService) {

  }

  ngOnInit(): void {    
        console.log('Section Template Fires')
        setTimeout(() => {
                  this.parameters.survey_id=this.org_id;
                  this.parameters.section_id=this.section_id;
                  this._dataService.postForm("get-survey-section-background-new", this.parameters).subscribe((data:any)=>{
                    console.log('Section Template Fires')
                    console.log(data)
                    this.data=data;
                  });
        }, 100);
      }
}
