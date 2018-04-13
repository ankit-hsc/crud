import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule, Routes}   from '@angular/router';
import{HttpModule}   from '@angular/http';
import{FormsModule}   from '@angular/forms';

import { AppComponent } from './app.component';
import { VideoUploadComponent } from './components/video-upload/video-upload.component';
import { VideoReportComponent } from './components/video-report/video-report.component';
import{ReportService} from './shared-service/report.service'
 
const appRoutes:Routes=[
  {path:'videoUpload', component:VideoUploadComponent},
    {path:'videoReport', component:VideoReportComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    VideoUploadComponent,
    VideoReportComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
