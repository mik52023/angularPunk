import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';

import  {VideoListService} from '../services/video-list.service';
import { Video} from '../video/video.model';

@Component({
  selector: 'app-show-all-location',
  templateUrl: './show-all-location.component.html',
  styleUrls: ['./show-all-location.component.css']
})
export class ShowAllLocationComponent implements OnInit {

video_list:Video[]=[];

  constructor(private videolistservice:VideoListService) { }

  ngOnInit() {

      this.videolistservice.getVideosByLocation("Tel-Aviv").subscribe(
(res:Response)=>{
    this.video_list=res.json();
  }
  );

}
}
