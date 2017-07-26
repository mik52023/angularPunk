import { Component ,AfterViewInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';


ngAfterViewInit() {
           var tag = document.createElement('script');
 
           tag.src = "https://www.youtube.com/iframe_api";
           var firstScriptTag = document.getElementsByTagName('script')[0];
           firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
     }

}
