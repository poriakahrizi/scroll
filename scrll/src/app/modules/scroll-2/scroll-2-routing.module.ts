import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewScrollComponent } from './new-scroll/new-scroll.component';

const routes: Routes = [{path:'scroll2',component:NewScrollComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Scroll2RoutingModule { }
