import { Component, OnInit } from '@angular/core';
import {Video} from '../video/video.model';
import {NgForm} from '@angular/forms';
 import { NgModel } from '@angular/forms';
 import {WrapperComponent} from '../wrapper/wrapper.component';
// import {VideoService} from '../services/video.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
 video:Video;
  constructor() { }

  ngOnInit() {
  }
 
  onSubmit(f :NgForm)
   { 

       this.video = new Video(0,f.value.video_name,f.value.url,f.value.concert_city,f.value.user
           ,f.value.band_name,f.value.song_name, f.value.concert_name, f.value.concert_date,0);

  //     videoService.uploadVideo(this.video)
   //    .then(

/**/
     //    );

    }
   
}
