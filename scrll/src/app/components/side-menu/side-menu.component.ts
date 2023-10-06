import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent  implements OnInit{

  ngOnInit() {
    this.configMenu();

   
  }
  configMenu() {
    $(".first-menu").mouseenter(() => {
      $(".wp-content").css({ width: "calc(100% - 150px)", float: "left" ,
      transition:'width 0.8s'});
    });
    $(".first-menu").mouseleave(() => {
      $(".wp-content").css({ width: "calc(100%)", transition:'width 0.8s'});
    });

  
  }
}
