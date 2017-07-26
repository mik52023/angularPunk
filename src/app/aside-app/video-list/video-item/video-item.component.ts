import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';
import {Video} from '../../../video/video.model';
import { DomSanitizer } from '@angular/platform-browser';
import  {VideoListService} from '../../../services/video-list.service';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent implements OnInit {

@Input() video:Video;

onSelected(){
    this.videolistservice.setSelectedVideo(this.video);
}

videoURL(){
return this.sanitizer.bypassSecurityTrustResourceUrl(this.video.embedded.toString());
}

  constructor(private sanitizer: DomSanitizer,private videolistservice:VideoListService) { }

  ngOnInit() {
  }


}
