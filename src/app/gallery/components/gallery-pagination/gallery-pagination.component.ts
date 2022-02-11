import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-gallery-pagination',
  templateUrl: './gallery-pagination.component.html',
  styleUrls: ['./gallery-pagination.component.scss']
})
export class GalleryPaginationComponent implements OnInit {

  selectedPage = 0;
  @Input("totalNumberOfPages") totalNumberOfPages=1;
  @Output("onPageChange") pageChangeEvent = new EventEmitter<any>();
  pages: number[];
  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    this.pages = Array(this.totalNumberOfPages).fill().map((x,i)=>i+1);

  }

  selectPage(i: number) {
    if(this.selectedPage == i)
      return;
    this.selectedPage = i;
    this.pageChangeEvent.emit(i);
  }
}
