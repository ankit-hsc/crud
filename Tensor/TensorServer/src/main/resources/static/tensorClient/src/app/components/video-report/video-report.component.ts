import { Component, OnInit } from '@angular/core';
import{ReportService} from '../../shared-service/report.service'

@Component({
  selector: 'app-video-report',
  templateUrl: './video-report.component.html',
  styleUrls: ['./video-report.component.css']
})
export class VideoReportComponent implements OnInit {
 private token:string;
 private ml:string;
 private listReport:any[];
 private loader:boolean;

  constructor(private reportService:ReportService) { }

  ngOnInit() {
    
  }

getReport(){
  this.loader=true;
this.reportService.report(this.token,this.ml).subscribe(
  (report)=>{
    console.log(report.data.result);
    this.listReport=report.data.result;
    console.log(typeof(this.listReport));
    this.loader=false;
    return this.listReport;
  },(error)=>{
   console.log(error);
  })
}



}
