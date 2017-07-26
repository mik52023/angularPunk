import { Component, OnInit, } from '@angular/core';
import { Video} from '../video/video.model';
import { DomSanitizer } from '@angular/platform-browser';
import {Http,Response} from '@angular/http';

import  {VideoListService} from '../services/video-list.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

main_video:Video=new Video(0,"Pitbull1",'https://www.youtube.com/embed/UWLr2va3hu0?controls=0&rel=0&enablejsapi=1&modestbranding=1&showinfo=0',"test2","test3","test4","test5","test6","10.08.2017",4500000,"20.20.20");

  constructor(private sanitizer: DomSanitizer ,private videolistservice:VideoListService) {
   }

videoURL(){
return this.sanitizer.bypassSecurityTrustResourceUrl(this.main_video.embedded.toString());
}

  ngOnInit() {
    this.videolistservice.getVideosByBand("Korn").subscribe(
        (res:Response)=>{
        this.main_video=res.json()[0];
});
   
 this.videolistservice.item_selected.subscribe(
   (video:Video) => {
               this.main_video=video;
          }
    );
}

}