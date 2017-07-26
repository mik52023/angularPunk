import { Component, OnInit } from '@angular/core';
import {UploadComponent} from '../upload/upload.component';
import { AppRoutingModule } from '../app-routing.module';
import  {VideoListService} from '../services/video-list.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 pressed:boolean;_
 search_input:string;
  constructor(private videolistservice:VideoListService) { }

  ngOnInit() {
      this.pressed=false;
  }

onPressed(){
    console.log(this.search_input);
this.videolistservice.setSearchValue(this.search_input);
    this.pressed=!this.pressed;
}
}
