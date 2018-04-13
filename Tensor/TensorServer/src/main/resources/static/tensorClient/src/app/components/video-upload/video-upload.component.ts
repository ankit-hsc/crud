import { Component, OnInit } from '@angular/core';
import{ReportService} from '../../shared-service/report.service'

@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.css']
})
export class VideoUploadComponent implements OnInit {
  
  private token:string;
  constructor(private reportService:ReportService) { }

  ngOnInit() {
  }

  onFileSelected(event){
    console.log(event);
    this.reportService.upload(event.target.files).subscribe(
      (data)=>{
        console.log(data);
        this.token=data;
      },(error)=>{
       console.log(error);
      })
  }


 
}
