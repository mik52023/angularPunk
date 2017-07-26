import { Component, OnInit ,Input,EventEmitter} from '@angular/core';

import {Video} from '../video/video.model';
import { DomSanitizer } from '@angular/platform-browser';
import  {VideoListService} from '../services/video-list.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

video_list:Video[]=[];
  constructor(private videolistservice:VideoListService) { }

  ngOnInit() {
     this.videolistservice.getVideosByBand(this.videolistservice.getSearchValue())
     .subscribe(
         (res)=>{
             this.video_list=res.json();
         });
  }

}
