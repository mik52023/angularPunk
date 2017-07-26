import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import{VideoPlayComponent} from './video-play/video-play.component';
import  {ShowLastUploadsComponent} from './show-last-uploads/show-last-uploads.component';
import {UploadComponent} from './upload/upload.component';
import{AsideTopListComponent} from './aside-top-list/aside-top-list.component';
import {ShowAllFavouritesComponent} from './show-all-favourites/show-all-favourites.component';
import {VideoListComponent} from './aside-app/video-list/video-list.component';

const appRoutes: Routes=[
{path: '', redirectTo: '/video-play', pathMatch:'full'},
{path:'video-play', component: VideoPlayComponent },
{path:'show-last-uploads', component: ShowLastUploadsComponent },
{path:'aside-top-list', component: AsideTopListComponent },
{path:'upload', component: UploadComponent },
{path:'show-all-favourites', component: ShowAllFavouritesComponent },
{path:'video-list', component:VideoListComponent}


];
console.log('app routes loading...');
@NgModule({
    imports: [RouterModule.forRoot(appRoutes,{enableTracing:true})],
    exports: [RouterModule]
    
})

export class AppRoutingModule{

}