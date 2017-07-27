import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AsideAppComponent} from './aside-app/aside-app.component';
import { AppComponent } from './app.component';

import {AsideBottomComponent} from './aside-app/aside-bottom/aside-bottom.component';
import {AsideTopComponent} from './aside-app/aside-top/aside-top.component';

import { WrapperComponent } from './wrapper/wrapper.component';
import { NavComponent } from './nav/nav.component';
import { VideoComponent } from './video/video.component';

import { AsideTopListComponent } from './aside-top-list/aside-top-list.component';
import { VideoTopComponent } from './video-top/video-top.component';
import { RouterModule, Routes } from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { VideoPlayComponent } from './video-play/video-play.component';

import { MainComponent } from './main/main.component'
import {VideoListService }from './services/video-list.service';
import { VideoListComponent } from './aside-app/video-list/video-list.component';
import { VideoItemComponent } from './aside-app/video-list/video-item/video-item.component';
import { ShowLastUploadsComponent } from './show-last-uploads/show-last-uploads.component';
import { ShowLastUploadsMainComponent } from './show-last-uploads/show-last-uploads-main/show-last-uploads-main.component';
import { ShowLastUploadsAsideComponent } from './show-last-uploads/show-last-uploads-aside/show-last-uploads-aside.component';
import { UploadComponent } from './upload/upload.component';
import { ShowAllLocationComponent } from './show-all-location/show-all-location.component';

import { Component, OnInit } from '@angular/core';
import { BottomListComponent } from './bottom-list/bottom-list.component';
import { BottomItemComponent } from './bottom-list/bottom-item/bottom-item.component';
import { SearchPageComponent } from './search-page/search-page.component';
import{ YTComponent} from './yt/yt.component';


@NgModule({
  declarations: [
    AppComponent,
AsideAppComponent,
 AsideTopComponent,
    WrapperComponent,
    NavComponent,
    VideoComponent,
   AsideBottomComponent,
    AsideTopListComponent,
    VideoTopComponent,
    VideoPlayComponent,
    AsideBottomComponent,
    MainComponent,
    VideoListComponent,
    VideoItemComponent,
    ShowLastUploadsComponent,
    ShowLastUploadsMainComponent,
    ShowLastUploadsAsideComponent,
    UploadComponent,
    ShowAllLocationComponent,
    BottomListComponent,
    BottomItemComponent,
    SearchPageComponent,
    YTComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    

  ],
  providers: [VideoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
