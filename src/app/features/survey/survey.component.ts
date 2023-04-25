import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, Output, EventEmitter, HostBindingDecorator, HostListener, HostBinding } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FormsModule,  FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { DataService, FileUploadService } from 'src/app/data.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxTablePaginationModule } from 'ngx-table-pagination';
import { MatRadioModule } from '@angular/material/radio';
import { SqlComponentsModule, SqlMenuComponent } from 'sql-components';
import { FileUploadModule, FileUploadControl, FileUploadValidators } from '@iplab/ngx-file-upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { AddDocumentFormComponent } from 'src/app/components/add-document-form/add-document-form.component';
import { SqlUploadComponent } from 'src/app/components/sql-upload/sql-upload.component';
import { SmartUploadComponent } from 'src/app/components/smart-upload/smart-upload.component';
import { SitebarWrapperComponent } from 'src/app/template/sitebar-wrapper/sitebar-wrapper.component';


@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [CommonModule, Ng2SearchPipeModule, MatRadioModule, NgxTablePaginationModule, RouterModule, FormsModule, SqlUploadComponent, SmartUploadComponent,
    SqlComponentsModule, SqlMenuComponent, FileUploadModule, HttpClientModule, AddDocumentFormComponent, SitebarWrapperComponent],
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent  {

  @Output() onFileDropped = new EventEmitter<any>();

  @HostListener('dragover', ['$event']) onDragOver(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
  }
  //Dragleave listener, when something is dragged away from our host element
  @HostListener('dragleave', ['$event']) public onDragLeave(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('drop', ['$event']) public ondrop(evt: any) {
//    evt.preventDefault();
//    evt.stopPropagation();
//    let files = evt.dataTransfer.files;
//    if (files.length > 0) {
//      this.onFileDropped.emit(files)
//    }
  this.uploadFiles();
  }

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router, 
    private _dataService: DataService,
    public http: HttpClient,
    private fileUploadService: FileUploadService
) { }
  public uploadedFiles: Array<File> = [];
  data: any; 



  uploading: any = 'N';
  adding: any = 'N';
  inviting: any = 'N';
  sharing: any = 'N';
  managing: any = 'N';

  version: any = 'N';
  k: any;
  uploadedList: any = '';
  public fileUploadControl = new FileUploadControl();
  progress: number = 0;
  uid: any = 0;
  doc_id: any = 0;


//  <li #row id="PERIMETER">Perimeter Security</li>
  //<li #row id="APPROACH">Approach and Parking</li>
//  <li #row id="OUTDOOR">Outdoor Areas</li>
  //<li #row id="ENVELOPE">Building Envelope</li>
//  <li #row id="ENTRYCONTROL">Entry Controls</li>
  //<li #row id="SRP">Security / Response Planning</li>
//  <li #row id="RESPONSE">Emergency Response</li>
  //<li #row id="STAFFING">Security Force & Staffing</li>
//  <li #row id="INCIDENTS">Incident History</li>
  //<li #row id="THREAT">Likely Threats</li>
//  <li #row id="ESS">Electronic Security Systems</li>
  //<li #row id="CYBER">Cyber Security</li>
//  <li #row id="UTILITIES">Utility Dependencies</li>

  general: any = 'Y';
  population: any = 'N';
  perimeter: any = 'N';
  approach: any = 'N';
  outdoor: any = 'N';
  envelope: any = 'N';
  entrycontrol: any = 'N';
  srp: any = 'N';
  response: any = 'N';
  staffing: any = 'N';
  incidents: any = 'N';
  threat: any = 'N';
  ess: any = 'N';
  cyber: any = 'N';
  utilities: any = 'N';

  formData: any = {
    org_id: 0,
    full_name: '',
    custom_msg: '',
    email: '',
    default_role: '0'
  }

  ngOnInit(): void {      
          this._activatedRoute.data.subscribe(({ 
            data, menudata, userdata })=> { 
            this.data=data;
            console.log(this.data);
            if (this.data.user.force_logout>0) {
                localStorage.removeItem('uid');
                this._router.navigate(['/sign-in']);

            } else {
              this.uploading='N'
              this.uid=localStorage.getItem('uid');
            }
          }) 
  }

  toggleUpload() {
    if (this.uploading=='Y') {
      this.uploading='N';
    } else {
      this.uploading='Y';
    }
  }
closeUpload() {
  this.uploading='N';
}
  toggleAdd() {
    if (this.adding=='Y') {
      this.adding='N';
    } else {
      this.adding='Y';
    }
  }

  toggleInviteT() {
    if (this.inviting=='Y') {
      this.inviting='N';
    } else {
      this.inviting='Y';
    }
  }

  sendInviteT() {
    this.formData.org_id = this.data.formData.id;
    this._dataService.postAuth("invite-team-member", this.formData).subscribe((data:any)=>{
      location.reload();  
    });
  }

  toggleVersion(m: any) {
    this.k=m;
    this.doc_id=m.id;
    if (this.version=='Y') {
      this.version='N';
    } else {
      this.version='Y';
    }
  }

  processClick(m: any) {

  if (m.id=='GENERAL') { this.general='Y'; }
  if (m.id=='POPULATION') { this.population='Y'; }
  if (m.id=='PERIMETER') { this.perimeter='Y'; }
  if (m.id=='APPROACH') { this.approach='Y'; }
  if (m.id=='OUTDOOR') { this.outdoor='Y'; }
  if (m.id=='ENVELOPE') { this.envelope='Y'; }
  if (m.id=='ENTRYCONTROL') { this.entrycontrol='Y'; }
  if (m.id=='SRP') { this.srp='Y'; }
  if (m.id=='RESPONSE') { this.response='Y'; }
  if (m.id=='STAFFING') { this.staffing='Y'; }
  if (m.id=='INCIDENTS') { this.incidents='Y'; }
  if (m.id=='THREAT') { this.threat='Y'; }
  if (m.id=='ESS') { this.ess='Y'; }
  if (m.id=='CYBER') { this.cyber='Y'; }
  if (m.id=='UTILITIES') { this.utilities='Y'; }


  }

  closeManage() {
    this.managing='N';
  }

  ngOnDestroy(): void
  {
   //--   this._unsubscribeAll.next(null);
   //--   this._unsubscribeAll.complete();
  }

  downloadZip() {
    location.href="https://protectivesecurity.org/zip.php?id=" + this.data.formData.id;
  }

uploadFiles() {
  for (const droppedFile of this.uploadedFiles) {
    console.log(droppedFile.name);
    console.log(droppedFile.size);
    console.log(droppedFile.type);
    let postData= {
      one: 'one',
      two: 'two'
    }
    this.fileUploadService.upload(droppedFile, postData).subscribe((event: HttpEvent<any>) => {
    switch (event.type) {
      case HttpEventType.Sent:
        console.log('Request has been made!');
        break;
      case HttpEventType.ResponseHeader:
        console.log('Response header has been received!');
        break;
      case HttpEventType.UploadProgress:
        this.progress = Math.round(event.loaded / event.total! * 100);
        console.log('Uploaded! ' + this.progress);
        break;
      case HttpEventType.Response:
        console.log('User successfully created!', event.body);
        setTimeout(() => {
          this.progress = 0;
          this.uploadedList+=droppedFile.name;
        }, 1500);
    }
  })
}
}

drop() {
  alert('dropped')
}

public clear(): void {
  this.uploadedFiles = [];
}

}
