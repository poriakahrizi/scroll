import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { FormsModule } from '@angular/forms';
import { VirtualScrollerDefaultOptions } from 'ngx-virtual-scroller';
export function vsDefaultOptionsFactory(): VirtualScrollerDefaultOptions {
  return {
      checkResizeInterval: 1000,
      modifyOverflowStyleOfParentScroll: true,
      resizeBypassRefreshThreshold: 5,
      scrollAnimationTime: 750,
      scrollDebounceTime: 0,
      scrollThrottlingTime: 0,
      stripedTable: false
  };
}
@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ {provide: 'virtual-scroller-default-options', useFactory: vsDefaultOptionsFactory}],
  bootstrap: [AppComponent]
})
export class AppModule { }
