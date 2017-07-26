import { Component, OnInit } from '@angular/core';
import {Video} from '../video/video.model';
import {NgForm} from '@angular/forms';
 import { NgModel } from '@angular/forms';
 import {WrapperComponent} from '../wrapper/wrapper.component';
// import {VideoService} from '../services/video.service';
import  {VideoListService} from '../services/video-list.service';
import {Http,Response} from '@angular/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
 video:Video;
 show_alert:boolean=false;
 alert_type:string;
  constructor(private videolistservice:VideoListService) { }

  ngOnInit() {
  }
 
  onSubmit(form :NgForm)
   { 
    
  const val=form.value;
console.log("sending data...");
console.log(val.name);
    this.videolistservice.uploadVideo(val.name,4,val.embedded,val.location,val.song,val.band,val.concert_name,val.concert_date,"avi")
   .subscribe(
     (res:Response)=>{
       this.show_alert=true; 
       if(res.json()=="success"){
                              this.alert_type="upload successful";     
                                   }
      else{
        this.alert_type="upload failed";
      }                             
});

    }
   
}
