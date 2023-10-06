import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestScrollComponent } from './test-scroll/test-scroll.component';

const routes: Routes = [{path:'test-scroll-1',component:TestScrollComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Scroll1RoutingModule { }
