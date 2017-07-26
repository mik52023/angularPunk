import { Component, OnInit } from '@angular/core';
import {Video} from '../../video/video.model';
import  {VideoListService} from '../../services/video-list.service';

@Component({
  selector: 'app-aside-bottom',
  templateUrl: './aside-bottom.component.html',
  styleUrls: ['./aside-bottom.component.css']
})
export class AsideBottomComponent implements OnInit {

video_list:Video[]=[];


  constructor(private videolistservice:VideoListService) { 



  }

  ngOnInit() {
this.video_list=this.videolistservice.getVideosByLocation("Tel-Aviv");
  }
}
