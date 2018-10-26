import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { Aux1Component } from './aux1/aux1.component';
import { Aux2Component } from './aux2/aux2.component';
import { Aux3Component } from './aux3/aux3.component';

@NgModule({
  imports: [
    CommonModule,
    VideoRoutingModule
  ],
  declarations: [
    Aux1Component,
    Aux2Component,
    Aux3Component
  ]
})
export class VideoModule { }
