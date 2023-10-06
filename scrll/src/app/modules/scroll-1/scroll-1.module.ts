import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Scroll1RoutingModule } from './scroll-1-routing.module';
import { TestScrollComponent } from './test-scroll/test-scroll.component';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';


@NgModule({
  declarations: [
    TestScrollComponent],
  imports: [
    CommonModule,
    Scroll1RoutingModule,
    VirtualScrollerModule
  ]
})
export class Scroll1Module { }
