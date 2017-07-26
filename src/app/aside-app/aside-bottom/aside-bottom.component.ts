import { Component, OnInit } from '@angular/core';
import {Video} from '../../video/video.model';
import  {VideoListService} from '../../services/video-list.service';
import {Http,Response} from '@angular/http';

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
this.videolistservice.getVideosByLocation("Tel-Aviv").subscribe(
(res:Response)=>{
this.video_list=res.json();
     }
    );
  }
}
