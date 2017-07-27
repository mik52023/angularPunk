import { Component, OnInit , Input} from '@angular/core';
import {Video} from '../video/video.model';

@Component({
  selector: 'app-video-top',
  templateUrl: './video-top.component.html',
  styleUrls: ['./video-top.component.css']
})
export class VideoTopComponent implements OnInit {
@Input() video: Video;
  constructor() { }

  ngOnInit() {
  }

}
