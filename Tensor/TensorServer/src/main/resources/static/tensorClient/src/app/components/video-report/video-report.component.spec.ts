import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoReportComponent } from './video-report.component';

describe('VideoReportComponent', () => {
  let component: VideoReportComponent;
  let fixture: ComponentFixture<VideoReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
