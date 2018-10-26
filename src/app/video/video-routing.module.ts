import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Aux1Component } from './aux1/aux1.component';
import { Aux2Component } from './aux2/aux2.component';
import { Aux3Component } from './aux3/aux3.component';

const routes: Routes = [
  {
    path: 'aux1',
    component: Aux1Component,
    outlet: 'aux'
  },
  {
    path: 'aux2',
    component: Aux2Component,
    outlet: 'aux'
  },
  {
    path: 'aux3',
    component: Aux3Component,
    outlet: 'aux'
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule { }
