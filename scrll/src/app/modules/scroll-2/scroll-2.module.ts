import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Scroll2RoutingModule } from './scroll-2-routing.module';
import { NewScrollComponent } from './new-scroll/new-scroll.component';


@NgModule({
  declarations: [
    NewScrollComponent
  ],
  imports: [
    CommonModule,
    Scroll2RoutingModule
  ]
})
export class Scroll2Module { }
