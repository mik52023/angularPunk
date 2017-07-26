import {EventEmitter,Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/Rx';

import{Video} from '../video/video.model';

@Injectable()
export class VideoListService{

//selected_video:Video=new Video(0,"Pitbull1",'https://www.youtube.com/embed/UWLr2va3hu0?controls=0&rel=0&enablejsapi=1&modestbranding=1&showinfo=0',"test2","test3","test4","test5","test6","10.08.2017",4500000,"20.20.20");
selected_video:Video;
private videos:Video[]=[];
item_selected=new EventEmitter<Video>();

private url:string="https://movies-ws-project.herokuapp.com/";

    constructor(private http: Http){
  
    }

    getVideosByBand(band){
  return this.http.get(`${this.url}get_Movies_by_band/`,{params:{band:band}});
    }

  getVideosByUser(user){
  return this.http.get(`${this.url}get_Movies_by_user/`,{params:{user:user}});
    }
 getVideosByLocation(location){
   return    this.http.get(`${this.url}get_Movies_by_location/`,{params:{location:location}});
    }    

 getSelectedVideo(){
   return this.selected_video;
 }   

setSelectedVideo(video:Video){
this.selected_video=video;
this.item_selected.emit(this.selected_video);
 }
uploadVideo(name,id,embedded,location,song,band,concert_name,concert_date,user){

  const obj={name:name,id:id,embedded:embedded,location:location,song:song,band:band,concert_name:concert_name,concert_date:concert_date,user:user}
  return this.http.post(`${this.url}add_Movie/`,obj);
}
}
