import { Component, OnInit ,EventEmitter,Output,Input} from '@angular/core';
import {Video} from '../video/video.model';
@Component({
  selector: 'app-bottom-list',
  templateUrl: './bottom-list.component.html',
  styleUrls: ['./bottom-list.component.css']
})
export class BottomListComponent implements OnInit {
@Input() videos:Video[];
  constructor() { }

  ngOnInit() {
  }

}
