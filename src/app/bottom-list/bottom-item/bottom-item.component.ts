import { Component, OnInit ,EventEmitter,Output,Input} from '@angular/core';
import {Video} from '../../video/video.model';

import { DomSanitizer } from '@angular/platform-browser';
import  {VideoListService} from '../../services/video-list.service';

@Component({
  selector: 'app-bottom-item',
  templateUrl: './bottom-item.component.html',
  styleUrls: ['./bottom-item.component.css']
})
export class BottomItemComponent implements OnInit {

 
@Input() video:Video;

onSelected(){
    console.log(this.video.name);
    this.videolistservice.setSelectedVideo(this.video);
}

videoURL(){
return this.sanitizer.bypassSecurityTrustResourceUrl(this.video.embedded.toString());
}

  constructor(private sanitizer: DomSanitizer,private videolistservice:VideoListService) { }

  ngOnInit() {
  }

}
