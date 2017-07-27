import { Component, OnInit } from '@angular/core';
import{Video} from '../video/video.model';

@Component({
  selector: 'app-aside-top-list',
  templateUrl: './aside-top-list.component.html',
  styleUrls: ['./aside-top-list.component.css']
})
export class AsideTopListComponent implements OnInit {
video_tops:Video;
  constructor() { }

  ngOnInit() {
  }

}
