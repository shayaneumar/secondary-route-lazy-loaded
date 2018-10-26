import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LazyComponent } from './lazy.component';
import { VideoModule } from '../video/video.module';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    VideoModule
  ],
  declarations: [
    LazyComponent,
    Home1Component,
    Home2Component
  ]
})
export class HomeModule { }
