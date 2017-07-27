import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { Video} from '../../video/video.model';
import { DomSanitizer } from '@angular/platform-browser';
import {WrapperComponent} from '../../wrapper/wrapper.component';
import {Http,Response} from '@angular/http';

import  {VideoListService} from '../../services/video-list.service';

@Component({
  selector: 'app-aside-top',
  templateUrl: './aside-top.component.html',
  styleUrls: ['./aside-top.component.css']
})
export class AsideTopComponent implements OnInit {

pressed:boolean;
top_video:Video = new Video(0,"Pitbull2",'https://www.youtube.com/embed/UWLr2va3hu0?controls=0&rel=0&enablejsapi=1&modestbranding=1&showinfo=0',"test2","test3","test4","test5","test6","10.08.2017",4500000,"20.2.20");
 
  constructor(private sanitizer: DomSanitizer,private videolistservice:VideoListService) { }

  ngOnInit() {
this.videolistservice.getVideosByUser("avi").subscribe( 
         (res:Response)=>{
        this.top_video=res.json()[0];
});

  }

videoURL(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.top_video.embedded.toString());
   
}
onSelected(){
    this.videolistservice.setSelectedVideo(this.top_video);
}

onPressed(){
    this.pressed=!this.pressed;
}
}
