import { Component } from '@angular/core';
import { IPageInfo } from 'ngx-virtual-scroller';

@Component({
  selector: 'app-test-scroll',
  templateUrl: './test-scroll.component.html',
  styleUrls: ['./test-scroll.component.scss']
})
export class TestScrollComponent {
  Page = 1;
  PageSize = 12;
  endItem=12
  itemsData:any[]=[]
 itemIndexer=0
  protected loading: boolean =false;
  constructor(){
    this.generateItem()
  }
  protected fetchMore(event: IPageInfo) {
    // console.log(event.endIndex);
    if (event.endIndex + 1 != this.endItem) return;
    this.loading = true;
    this.getData();
}
getData(){
///run services code

  setTimeout(() => {
   
    this.loading = false;
    this.Page++;
    this.endItem = (this.Page * this.PageSize);
    this.generateItem()
  }, 1500);
} 
generateItem(){
  for (let index = 0; index < (this.endItem/this.Page); index++) {
    this.itemIndexer++
    this.itemsData.push(this.itemIndexer);
    
  }
}
}
